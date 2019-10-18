import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from '@shared/services/login.service';

@Injectable()
export class FakeTokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loginService.user && this.loginService.user.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.loginService.user.token}`
        }
      });
    }
    return next.handle(request);
  }
}
