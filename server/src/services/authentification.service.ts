import { BucketItem } from "../interface/bucket_item";
import { DatabaseService } from "./database.service";
import * as io from 'socket.io';

export class AuthentificationService {
    private databaseService : DatabaseService;

    constructor(databaseService : DatabaseService)
    {   
        this.databaseService = databaseService;
    }

    handleAuthSockets(socket: io.Socket) {
        socket.on('User Connect', (username: string) => {
            // TODO
        });

        socket.on('User Register', (username: string, password: string, bucketitems : string[]) => {
            const bucketlist : BucketItem[] = [];
            for(const item of bucketitems){
                bucketlist.push({name: item, isDone: false});
            }
            //const account = new Account(username, bucketlist);
            //socket.data.user = account;
        });

        socket.on('User Disconnect', (bucketName: string) => {
            // TODO
        });
    }
}