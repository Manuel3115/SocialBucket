import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { SocketManagerService } from './socket-manager.service';

@Injectable({
    providedIn: 'root',
})
export class AccountSocketService {
    private socket: Socket;

    constructor(socketManagerService : SocketManagerService) {
        this.socket = socketManagerService.getSocket();
    }

    register(username : string, bucketList : string[], callback: (usernameFree: boolean) => void) {
        this.socket.once('Register Success', callback);
        this.socket.emit('User Register', username, bucketList);
    }

    connect(username : string, callback: () => void) {
        this.socket.once('Connect Success', callback);
        this.socket.emit('User Connect', username);
    }

    getBucketList(callback: (bucketList: {name : string, isDone: boolean}[]) => void){
        this.socket.once('Bucket List', callback);
        this.socket.emit('Get Bucket List');
    }
}