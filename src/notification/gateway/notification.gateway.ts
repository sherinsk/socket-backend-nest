// src/notification/notification.gateway.ts

import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})


export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  sendToAllExcept(senderSocketId: string, data: any) {
    this.server.sockets.sockets.forEach((socket) => {
      if (socket.id !== senderSocketId) {
        socket.emit('receiveNotification', data);
      }
    });
  }

  sendToAll(data: any) {
    this.server.emit('receiveNotification', data);
  }
}
