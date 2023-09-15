import { Server } from 'socket.io'

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>();
