import { useSelector } from "react-redux";
import { selectedConversationSelector } from "../mesibo/state/selectors";
import useChatMessages from "../mesibo/hooks/useChatMessages";

function ChatWindow() {
  const selectConversation = useSelector(selectedConversationSelector);
  const messages = useChatMessages({ userId: selectConversation });

  console.log(messages, "messages");
  return (
    <div>
      <h2>Chat Window</h2>
    </div>
  );
}

export default ChatWindow;
