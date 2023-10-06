import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";

export const setupSocketServer = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", (socket: Socket) => {
    console.log("⚡:new client connected:", socket.id);

    socket.on("message", (data) => {
      console.log("Message from client:", data);
      socket.emit("message", `from server ${data}`);
    });

    socket.on("disconnect", () => {
      console.log("🔥:client disconnected:", socket.id);
    });
  });
};
