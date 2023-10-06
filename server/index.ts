import express, { Express } from "express";
import dbConnect from "./lib/dbConnect";
import { setupSocketServer } from "./lib/socketServer";
import { CHAT_PORT, MONGO_PORT } from "./utils/config";
import emoteRouter from "./controllers/emoteRouter";
import http from "http";
const cors = require("cors");

const app: Express = express();
const dbPort = MONGO_PORT;
const chatPort = CHAT_PORT;

app.use(cors());

const httpServer = http.createServer(app);
setupSocketServer(httpServer);

app.use("/api/emotes", emoteRouter);

app.get("/", (req, res) => {
  res.send("Socket.IO server running.");
});

const start = async () => {
  try {
    await dbConnect();
    console.log("connected to DB");
    app.listen(dbPort, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

httpServer.listen(chatPort, () => {
  console.log(`Server running on http://localhost:${chatPort}`);
});
