import { Controller, Get } from '@nestjs/common';
import { AvtobarakaBatchService } from './avto-baraka-batch.service';

@Controller()
export class AvtobarakaBatchController {
  constructor(
    private readonly avtobarakaBatchService: AvtobarakaBatchService,
  ) {}

  @Get()
  getHello(): string {
    return this.avtobarakaBatchService.getHello();
  }
}
