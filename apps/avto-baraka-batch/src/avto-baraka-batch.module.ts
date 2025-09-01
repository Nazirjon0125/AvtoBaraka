import { Module } from '@nestjs/common';
import { AvtobarakaBatchController } from './avto-baraka-batch.controller';
import { AvtobarakaBatchService } from './avto-baraka-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AvtobarakaBatchController],
  providers: [AvtobarakaBatchService],
})
export class AvtobarakaBatchModule {}
