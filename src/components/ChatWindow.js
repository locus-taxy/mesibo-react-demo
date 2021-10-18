/* eslint-disable no-undef */
import { useSelector } from "react-redux";
import { selectedConversationSelector } from "../mesibo/state/selectors";
import useChatMessages from "../mesibo/hooks/useChatMessages";
import { TextField, IconButton, List, ListItem } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { getProfile } from "../mesibo/ChatWorker";
import { useDispatch } from "react-redux";
import { updateTimeStamp } from "../mesibo/state/slice";

function ChatWindow() {
  const userId = useSelector(selectedConversationSelector);
  const messages = useChatMessages({ userId });
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  console.log("messages", messages);

  const sendMessage = () => {
    const profile = getProfile(userId);
    profile.sendMessage(Math.random() * 100000, inputValue);
    dispatch(updateTimeStamp(new Date().getTime()));
    setInputValue("");
  };

  return (
    <div>
      <h2>Chat Window</h2>
      <div style={{ display: "flex", margin: "1rem" }}>
        <TextField
          variant="standard"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyPress={(event) => {
            if (!inputValue) {
              return;
            }

            if (event.key === "Enter" && !event.shiftKey) {
              sendMessage();
            }
          }}
        />
        <IconButton
          color="primary"
          disabled={!inputValue}
          onClick={sendMessage}
        >
          <SendIcon />
        </IconButton>
      </div>
      <List>
        {messages
          .sort((messageA, messageB) => messageB.ts - messageA.ts)
          .map((message) => (
            <ChatMessage
              key={message.id}
              message={message.message}
              status={message.status}
            />
          ))}
      </List>
    </div>
  );
}

function ChatMessage({ message, status }) {
  const isMessageIncoming =
    status === MESIBO_MSGSTATUS_RECEIVEDNEW ||
    status === MESIBO_MSGSTATUS_RECEIVEDREAD;
  return (
    <ListItem
      style={{
        backgroundColor: isMessageIncoming ? "lightblue" : "lightgray",
        width: "fit-content",
        marginLeft: isMessageIncoming ? "8rem" : "0rem",
        marginBottom: "0.5rem",
      }}
    >
      <div>{message}</div>
    </ListItem>
  );
}

export default ChatWindow;
