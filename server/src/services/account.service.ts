import * as io from 'socket.io';
import { BucketItem } from '../interface/bucket_item';
import { DatabaseService } from './database.service';

export class AccountService {
    private databaseService : DatabaseService;

    constructor(databaseService : DatabaseService)
    {   
        this.databaseService = databaseService;
    }

    handleAccountSockets(socket: io.Socket) {
        socket.on('Bucket Add', async (bucketName: string) => {
            let itemAdded = false;
            if (!(socket.data.user.bucketList.findIndex((item : BucketItem) => item.name === bucketName) >= 0))
            {
                const bucketItem : BucketItem = { name : bucketName, isDone : false};
                socket.data.user.bucketList.push(bucketItem);
                await this.databaseService.updateAccountInformations(socket.data.user);
                itemAdded = true;
            }
            socket.emit('Bucket Added', itemAdded);
        });

        socket.on('Bucket Check', async (bucketName: string) => {
            // TODO
            let itemChecked = false;
            if (socket.data.user.bucketList.findIndex((item : BucketItem) => item.name === bucketName) >= 0)
            {
                const bucketItem : BucketItem = { name : bucketName, isDone : false};
                socket.data.user.bucketList.find((item : BucketItem) => item.name = bucketName).isDone = true;
                await this.databaseService.updateAccountInformations(socket.data.user);
                itemChecked = true;
            }
            socket.emit('Bucket Checked', itemChecked);
        });

        socket.on('Bucket Remove', (bucketName: string) => {
            // TODO
        });

        socket.on('Get Bucket List', () => {
            if(socket.data.user){
                socket.emit('Bucket List', socket.data.user.bucketList);
            }
        });

        socket.on('Get Users Bucket Item', async (bucketName: string) => {
            socket.emit('Users Bucket Item', await this.databaseService.getUsernamesWithObjective(bucketName, false));
        });
    }
}
