import { useState, useEffect } from "react";
import { useSocket } from "../contexts/SocketContext";
import "./message-container.css";

function MessageContainer() {
  const [messages, setMessages] = useState<string[]>([]);
  const { socket } = useSocket();

  useEffect(() => {
    const newMessages = [
      "message1",
      "message2",
      "message3",
      "message4",
      "message5",
      "message6",
    ];
    setMessages(newMessages);
    socket?.on("message", (message) => {
      console.log(message);
      const newMessages: string[] = [...messages];
      newMessages.push(message);
      setMessages(newMessages);
    });
    return () => {
      socket?.off("message");
    };
  }, []);
  return (
    <div className="message-container">
      {messages.map((message, idx) => {
        return <p key={idx}>{message}</p>;
      })}
    </div>
  );
}

export default MessageContainer;
