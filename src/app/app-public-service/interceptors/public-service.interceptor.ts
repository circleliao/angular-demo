import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class PublicServiceInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("拦截器OK")
    let clone = request.clone({
       setHeaders:{"AAA":"BBB"}
    });
    // console.table(request.headers)
    // console.table(clone.headers)
    return next.handle(clone);
  }
}
