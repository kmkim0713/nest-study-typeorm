import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getUTCDateTime } from "../Util/Utils";

@Injectable()
export class ResponseLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;

    const start = Date.now();

    // next.handle()로 Observable 반환, 응답 후 tap에서 후처리
    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - start;
        console.log(
          `[Response][${getUTCDateTime()}] ${method} ${url} - completed in ${duration}ms`,
        );
      }),
    );
  }
}
