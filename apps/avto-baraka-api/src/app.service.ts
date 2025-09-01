import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Welcome to AvtoBaraka API Server World!';
  }

  public getDetail(): string {
    return 'Welcom to AvtoBaraka!';
  }
}
