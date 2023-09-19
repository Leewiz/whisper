import express from 'express';
import { Server } from 'socket.io';
import { ChatEvent } from './constants';
import { ChatMessage } from './types';
import http from 'http';
var cors = require('cors');

export class ChatServer {
    public static readonly PORT: number = 8080;
    private mApp: express.Application;
    private server: http.Server;
    private io: Server;
    private port: string | number;

    constructor(){
        this.mApp = express();
        this.port = /*process.env.PORT ||*/ ChatServer.PORT;
        this.mApp.use(cors());
        this.mApp.options('*', cors());
        this.server = http.createServer(this.mApp);
        this.io = new Server(this.server);
        this.listen();
    }

    private initSocket(): void {
        this.io = new Server(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
      
        this.io.on(ChatEvent.CONNECT, (socket: any) => {
            console.log('Connected client on port %s.', this.port);
        
            socket.on(ChatEvent.MESSAGE, (m: ChatMessage) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });
        
            socket.on(ChatEvent.DISCONNECT, () => {
                console.log('Client disconnected');
            });
        });
    }

    get app(): express.Application{
        return this.mApp;
    }
};