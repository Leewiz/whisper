import MessageContainer from './MessageContainer'
import InputContainer from './InputContainer'
import './chat-window.css'
function ChatWindow() {
  return (
    <div className="chat-window">
        <MessageContainer />
        <InputContainer />
    </div>
  )
}

export default ChatWindow;

