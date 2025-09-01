import { Injectable } from '@nestjs/common';

@Injectable()
export class AvtobarakaBatchService {
  getHello(): string {
    return 'Welcome to AvtoBaraka BATCH Server!';
  }
}
