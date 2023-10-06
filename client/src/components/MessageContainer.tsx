import { useState, useEffect } from "react";
import { useSocket } from "../contexts/SocketContext";
import "./message-container.css";

interface Message {
  sender: string,
  message: string,
  
}
const messages = [
  "message1",
  "message2",
  "message3",
  "message4",
  "message5",
  "message6",
];

function MessageContainer() {
  // const [messages, setMessages] = useState<string[]>([]);
  const { socket } = useSocket();

  useEffect(() => {
    socket?.on("message", (message) => {
      console.log(message);
      let newMessages: string[] = messages;
      newMessages.push(message);
      // setMessages(newMessages);
    });
    return () => {
      socket?.off("message");
    };
  });
  return (
    <div className="message-container">
      {messages.map((message) => {
        return <p>{message}</p>;
      })}
    </div>
  );
}

export default MessageContainer;
