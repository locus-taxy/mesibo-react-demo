import React, { useEffect } from "react";
import { initializeMesibo } from "./mesibo/ChatWorker";
import LoadingButton from "@mui/lab/LoadingButton";
import { store } from "./store";
import { Provider, useSelector } from "react-redux";
import ChatIcon from "@mui/icons-material/Chat";
import {
  isMesiboInitializedSelector,
  selectedConversationSelector,
} from "./mesibo/state/selectors";
import Conversations from "./components/Conversations";
import ChatWindow from "./components/ChatWindow";

function App() {
  useEffect(() => {
    initializeMesibo();
  }, []);

  const isMesiboInitialized = useSelector(isMesiboInitializedSelector);
  const selectedConversation = useSelector(selectedConversationSelector);

  return (
    <div className="App">
      <LoadingButton loading={!isMesiboInitialized}>
        <ChatIcon />
      </LoadingButton>
      {selectedConversation ? <ChatWindow /> : <Conversations />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
