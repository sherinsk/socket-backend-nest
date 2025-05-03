// src/notification/notification.service.ts

import { Injectable } from '@nestjs/common';
import { NotificationGateway } from '../gateway/notification.gateway';

@Injectable()
export class NotificationService {
  constructor(private readonly gateway: NotificationGateway) {}

  notifyOthers(message: string, senderSocketId: string) {
    this.gateway.sendToAllExcept(senderSocketId, { message });
  }

  notifyAll(message: string) {
    this.gateway.sendToAll({ message });
  }
}
