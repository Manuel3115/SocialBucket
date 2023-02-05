import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { SocketManagerService } from './socket-manager.service';

@Injectable({
    providedIn: 'root',
})
export class ChatSocketService {
    private socket: Socket;

    constructor(socketManagerService : SocketManagerService) {
        this.socket = socketManagerService.getSocket();
    }

    setMessageListener(callback: (message: string, username:string, bucketName: string) => void){
        this.socket.on('New Message', callback);
    }

    sendMessage(message: string, bucketName: string, callback: () => void){
        this.socket.once('Message Received', callback);
        this.socket.emit('Message Sent', message, bucketName);
    }

}