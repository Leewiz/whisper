import express, { Express } from 'express';
import dbConnect from './lib/dbConnect';
import { PORT } from './utils/config';
import emoteRouter from './controllers/emoteRouter';
const app: Express = express();
const port = PORT;

app.use('/api/emotes', emoteRouter);

const start = async () => {
  try {
    await dbConnect()
    console.log("connected to DB")
    app.listen(port, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

