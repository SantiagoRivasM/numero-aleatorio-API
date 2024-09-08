import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {NumeroRandomModule} from './numero-random/numero-random.module';
import {TimestampMiddleware} from './timestamp-middleware';

@Module({
  imports: [NumeroRandomModule],
  controllers: [AppController,],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TimestampMiddleware).forRoutes('*');
  }
}
