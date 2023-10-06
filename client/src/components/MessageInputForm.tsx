import { useState, useEffect } from "react";
import { useSocket } from "../contexts/SocketContext";
import "./message-input-form.css";
function MessageInputForm() {
  const [message, setMessage] = useState("");
  const { socket } = useSocket();

  // send the message to the server when the form is submitted
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`input form: ${message}`);
    socket?.emit("message", message);
    setMessage("");
  };

  // update the message state when the input changes
  const handleChange = (e: React.ChangeEvent) => {
    setMessage((e.target as HTMLInputElement).value);
  };

  // listen for messages from the server
  useEffect(() => {
    if (!socket) return;

    socket.on("message", (message: string) => {
      console.log(message);
    });
    return () => {
      socket.off("message");
    };
  }, [socket]);

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input-box"
        placeholder="type your message here..."
        value={message}
        onChange={handleChange}
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  );
}

export default MessageInputForm;
