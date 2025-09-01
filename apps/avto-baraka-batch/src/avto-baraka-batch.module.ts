import { Module } from '@nestjs/common';
import { AvtobarakaBatchController } from './avto-baraka-batch.controller';
import { AvtobarakaBatchService } from './avto-baraka-batch.service';

@Module({
  imports: [],
  controllers: [AvtobarakaBatchController],
  providers: [AvtobarakaBatchService],
})
export class AvtobarakaBatchModule {}
