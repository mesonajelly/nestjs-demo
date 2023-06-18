import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 添加参数验证管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 去除不需要验证的字段
    }),
  );
  await app.listen(3000);
}
bootstrap();
