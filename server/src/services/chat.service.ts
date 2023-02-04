import * as io from 'socket.io';

export class ChatSocketService {
    handleChatSockets(socket: io.Socket) {
        socket.on('Message Sent', (message: string, bucketName: string) => {
            socket.to(bucketName).emit('New Message', message, bucketName);
        });
    }
}
