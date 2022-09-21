import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SSRModule } from './modules/ssr/ssr.module';

@Module({
  imports: [SSRModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
