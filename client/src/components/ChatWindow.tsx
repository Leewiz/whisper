import MessageContainer from "./MessageContainer";
import MessageInputForm from "./MessageInputForm";
import "./chat-window.css";

function ChatWindow() {
  return (
    <div className="chat-window">
      <MessageContainer />
      <MessageInputForm />
    </div>
  );
}

export default ChatWindow;
