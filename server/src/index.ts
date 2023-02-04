const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*', methods: ['GET', 'POST'] } });

app.get('/', (req: any, res: any) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket: any) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on http://localhost:3000/');
});