import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
    providedIn: 'root',
})
export class SocketManagerService {
    socket: Socket;

    constructor() {
        this.socket = io('10.200.44.52:3000/');
    }

    getSocket(): Socket {
        return this.socket;
    }
}
