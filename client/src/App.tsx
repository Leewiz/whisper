import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

import { SocketProvider } from "./contexts/SocketContext";
import "./App.css";
function App() {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "Hi, how are you?",
                sentTime: "2 min ago",
                sender: "John Doe",
                direction: "incoming",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hi, how are you?",
                sentTime: "1 min ago",
                sender: "leewiz",
                direction: "outgoing",
                position: "normal",
              }}
            />
          </MessageList>
          <MessageInput placeholder="type chat here..." />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default App;
