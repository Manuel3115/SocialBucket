import * as io from 'socket.io';

export class AccountService {
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
    }
}
