import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
    providedIn: 'root',
})
export class SocketManagerService {
    socket: Socket;

    constructor() {
        this.socket = io('107.152.43.46:3000/');
    }

    getSocket(): Socket {
        return this.socket;
    }
}
