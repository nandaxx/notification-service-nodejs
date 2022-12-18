import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()//o @ indica que é um decorator
export class AppController {
  constructor(private readonly appService: AppService) {}
 //inverção de dependências

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
