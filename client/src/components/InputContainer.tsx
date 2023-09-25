import { useEffect } from "react";
import { useSocket } from "../contexts/SocketContext";
import "./input-container.css";
function InputContainer() {
  const { socket } = useSocket();

  const handleClick = () => {
    socket?.emit("message", "handleClick: clicked the send button");
    return 0;
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("message", (message: string) => {
      console.log(message);
    });
  }, [socket]);

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box"
        placeholder="Type your message..."
      />
      <button className="send-button" onClick={handleClick}>
        Send
      </button>
    </div>
  );
}

export default InputContainer;
