import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './createNotificationBody';
import { PrismaService } from './prisma.service';

@Controller('notificationService')//o @ indica que é um decorator
export class AppController {
  constructor(private readonly prisma: PrismaService) {}
 //inverção de dependências

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body

    await this.prisma.notification.create({
      data: {
        id: randomUUID(), //gera um id
        content,
        category,
        recipientId,
      },
     });
  }
}
