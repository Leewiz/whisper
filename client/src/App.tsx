import ChatWindow from "./components/ChatWindow";
import { SocketProvider } from "./contexts/SocketContext";
import "./App.css";
function App() {
  return (
    <SocketProvider>
      <ChatWindow />
    </SocketProvider>
  );
}

export default App;
