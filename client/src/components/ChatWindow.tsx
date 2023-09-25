import { useEffect } from "react";
import MessageContainer from "./MessageContainer";
import InputContainer from "./InputContainer";
import { useSocket } from "../contexts/SocketContext";
import "./chat-window.css";

function ChatWindow() {
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on("message", (message: string) => {
      console.log(message);
    });
  }, [socket]);

  return (
    <div className="chat-window">
      <MessageContainer />
      <InputContainer />
    </div>
  );
}

export default ChatWindow;
