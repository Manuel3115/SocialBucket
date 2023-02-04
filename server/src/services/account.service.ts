import * as io from 'socket.io';
import { DatabaseService } from './database.service';

export class AccountService {
    private databaseService : DatabaseService;
    
    constructor(databaseService : DatabaseService){
        this.databaseService = databaseService;
    }

    handleAccountSockets(socket: io.Socket) {
        socket.on('Bucket Add', (bucketName: string) => {
            // TODO
        });

        socket.on('Bucket Check', (bucketName: string) => {
            // TODO
        });

        socket.on('Bucket Remove', (bucketName: string) => {
            // TODO
        });

        socket.on('Get Bucket List', () => {
            if(socket.data.user){
                socket.emit('Bucket List', socket.data.user.bucketList);
            }
        });

        socket.on('Get Users Bucket Item', (bucketName: string) => {
            
            // TODO Connect to DB
            socket.emit('Users Bucket Item', null);
        });
    }
}
