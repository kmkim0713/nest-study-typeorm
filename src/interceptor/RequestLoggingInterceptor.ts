import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { getUTCDateTime } from "../Util/Utils";

@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;

    console.log(`[${getUTCDateTime()}][Request] ${method} ${url} - start`);

    // 응답 후 로직 없음, 요청 처리만 로그
    return next.handle();
  }
}
