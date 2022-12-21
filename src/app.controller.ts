import { Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
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
  async create() {
    await this.prisma.notification.create({
      
      data: {
        id: randomUUID(), //gera um id
        content: 'Você possui uma nova notificação',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}
