//@flow
import { useState, useEffect } from "react";
import { getMesiboApi } from "../ChatWorker";
import { useSelector } from "react-redux";
import {
  isMesiboInitializedSelector,
  latestTimeStampSelector,
} from "../state/selectors";

type Props = {
  userId?: string,
  summaryOfAllUsers: boolean,
};

const useChatMessages = ({ summaryOfAllUsers, userId }: Props): Array<any> => {
  const [messages, setMessages] = useState([]);
  const isMesiboInitialized = useSelector(isMesiboInitializedSelector);
  const address = userId ?? null;
  useSelector(latestTimeStampSelector);

  useEffect(() => {
    if (!isMesiboInitialized) {
      return setMessages([]);
    }

    const api = getMesiboApi();
    const summarySession = api.readDbSession(address, 0, null, () => {
      setMessages(summarySession.getMessages());
    });
    summarySession.enableReadReceipt(true);
    if (summaryOfAllUsers) {
      summarySession.enableSummary(true);
    }
    summarySession.read(100);
  }, [address, isMesiboInitialized, summaryOfAllUsers]);

  return messages;
};

export default useChatMessages;
