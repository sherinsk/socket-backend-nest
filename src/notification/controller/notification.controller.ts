// src/notification/notification.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from '../services/notification.service';

@Controller('notify')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  send(@Body() body: { message: string, senderSocketId?: string }) {
    const { message, senderSocketId } = body;
    try{
        if (senderSocketId) {
            this.notificationService.notifyOthers(message, senderSocketId);
          } else {
            this.notificationService.notifyAll(message);
          }
      
          return { status: 'Notification sent' };
    }
    catch(error)
    {
        console.log("error",error)
        return error
    }

  }
}
