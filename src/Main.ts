import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { GlobalExceptionFilter } from "./exception/GlobalExcetpion";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());

  await app.listen(process.env.PORT ?? 4040);
}
bootstrap();
