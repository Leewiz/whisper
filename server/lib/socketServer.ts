import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";

export const setupSocketServer = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", (socket: Socket) => {
    console.log("New client connected:", socket.id);

    socket.on("message", (data) => {
      console.log("Message from client:", data);
      socket.emit("message", `Received your message: ${data}`);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};
