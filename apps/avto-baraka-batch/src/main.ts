import { NestFactory } from '@nestjs/core';
import { AvtobarakaBatchModule } from './avto-baraka-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(AvtobarakaBatchModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
