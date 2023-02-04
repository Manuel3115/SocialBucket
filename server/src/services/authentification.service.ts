import { BucketItem } from "../interface/bucket_item";
import { DatabaseService } from "./database.service";
import * as io from 'socket.io';
import { UserInformations } from "../interface/user_informations";

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

        socket.on('User Register', (username: string, bucketitems : string[]) => {
            const bucketList : BucketItem[] = [];
            for(const item of bucketitems){
                bucketList.push({name: item, isDone: false});
                socket.join(item);
            }
            const user : UserInformations = {username, bucketList};
            socket.data.user = user;
        });

        socket.on('User Disconnect', (bucketName: string) => {
            // TODO
        });
    }
}