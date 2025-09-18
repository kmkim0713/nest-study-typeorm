import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { GlobalExceptionFilter } from "./exception/GlobalExcetpion";
import { RequestLoggingInterceptor } from "./interceptor/RequestLoggingInterceptor";
import { ResponseLoggingInterceptor } from "./interceptor/ResponseLoggingInterceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new RequestLoggingInterceptor());
  app.useGlobalInterceptors(new ResponseLoggingInterceptor());

  await app.listen(process.env.PORT ?? 4040);
}
bootstrap();
