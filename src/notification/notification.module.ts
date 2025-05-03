// src/app.module.ts

import { Module } from '@nestjs/common';
import { NotificationGateway } from './gateway/notification.gateway';
import { NotificationService } from './services/notification.service';
import { NotificationController } from './controller/notification.controller';

@Module({
  controllers: [NotificationController],
  providers: [NotificationGateway, NotificationService],
})
export class NotificationModule {}
