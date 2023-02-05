import * as io from 'socket.io';

export class ChatSocketService {
    handleChatSockets(socket: io.Socket) {
        socket.on('Message Sent', (message: string, bucketName: string) => {
            if(socket.data.user){
                console.log(message);
                socket.to(bucketName).emit('New Message', message, socket.data.user.username, bucketName);
                socket.emit('Message Received');
            }
        });
    }
}
