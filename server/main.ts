import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('apia');
  console.log('xx')
  await app.listen(3000);
}
bootstrap();
