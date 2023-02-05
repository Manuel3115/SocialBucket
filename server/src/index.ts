import { BucketItem } from "./interface/bucket_item";
import { AccountService } from "./services/account.service";
import { AuthentificationService } from "./services/authentification.service";
import { ChatSocketService } from "./services/chat.service";
import { DatabaseService } from "./services/database.service";

const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*', methods: ['GET', 'POST'] } });

const databaseService = new DatabaseService();
const chatSocketService = new ChatSocketService();
const authService = new AuthentificationService(databaseService);
const accountService = new AccountService(databaseService);

databaseService.start();

app.get('/', (req: any, res: any) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket: any) => {
  chatSocketService.handleChatSockets(socket);
  authService.handleAuthSockets(socket);
  accountService.handleAccountSockets(socket);
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on http://localhost:3000/');
});