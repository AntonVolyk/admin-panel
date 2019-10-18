import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '@shared/services/authentication.service';

@Injectable()
export class FakeTokenInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.user && this.authenticationService.user.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.user.token}`
        }
      });
    }
    return next.handle(request);
  }
}
