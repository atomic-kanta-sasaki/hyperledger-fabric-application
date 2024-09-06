import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    // allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',　　←無しでもエラーなくなったが、他のサイトには必要と書いてあった↓
  });
  await app.listen(3000);
}
bootstrap();
