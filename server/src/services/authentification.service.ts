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
        socket.on('User Connect', async (username: string) => {
            const user : UserInformations | null = await this.databaseService.getUserInformation(username);
            let isConnectionSuccess = false;

            if (user !== null)
            {
                socket.data.user = user;
                this.addUserToNonCompletedObjectivesChatRoom(socket);
                isConnectionSuccess = true;
            }
            socket.emit('Connect Success', isConnectionSuccess);
        });

        socket.on('User Register', async (username: string, bucketitems : string[]) => {
            const bucketList : BucketItem[] = [];
            for(const item of bucketitems){
                bucketList.push({name: item, isDone: false});
                socket.join(item);
            }
            const user : UserInformations = {username, bucketList};
            socket.data.user = user;
            socket.emit('Register Success', !await this.databaseService.addAcount(username, bucketList));
            // TODO Database Registration
        });

        socket.on('User Disconnect', (bucketName: string) => {
            // TODO
        });
    }

    private addUserToNonCompletedObjectivesChatRoom(socket : io.Socket)
    {
        const userObjectives = socket.data.user.bucketList;
        for(let i = 0; i < userObjectives.length; i++)
        {
            if (userObjectives[i].isDone)
            {
                socket.join(userObjectives[i].name);
            }
        }
    }
}