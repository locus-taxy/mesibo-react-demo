import useChatMessages from "../mesibo/hooks/useChatMessages";
import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { selectConversation } from "../mesibo/state/slice";

function Conversations() {
  const messages = useChatMessages({ summaryOfAllUsers: true });

  return (
    <div style={{ width: "100%" }}>
      <h2>Conversations</h2>
      <List>
        {messages.map((conversation) => (
          <Conversation
            key={conversation.peer}
            message={conversation.message}
            user={conversation.peer}
          />
        ))}
      </List>
    </div>
  );
}

function Conversation({ user, message }) {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItemButton onClick={() => dispatch(selectConversation(user))}>
        <Typography variant="caption">{user} &nbsp;&nbsp;</Typography>
        <div>{message}</div>
      </ListItemButton>
    </ListItem>
  );
}

export default Conversations;
