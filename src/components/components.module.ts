import { Module } from '@nestjs/common';
import { ComponentsResolver } from './components.resolver';
import { ComponentsService } from './components.service';

@Module({
  providers: [ComponentsResolver, ComponentsService]
})
export class ComponentsModule {}
