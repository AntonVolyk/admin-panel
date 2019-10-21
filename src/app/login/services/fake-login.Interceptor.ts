import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {User} from '@shared/models/user';
import {delay} from 'rxjs/operators';

const USERS: User[] = [{ id: 1, name: 'admin', username: 'admin', password: 'test', token: 'test-user-token'}];
const LOGIN_ERROR_MESSAGE = 'Username or password is incorrect';

@Injectable()
export class FakeLoginInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/admin-panel/login')) {
      return this.login(request).pipe(delay(1000));
    }
    return next.handle(request);
  }

  login(request): Observable<any> {
    const user = USERS.find(item =>
      item.username === request.body.username && item.password === request.body.password
    );
    if (!user) {
      return throwError(LOGIN_ERROR_MESSAGE);
    }
    return of(new HttpResponse({status: 200, body: user}));
  }
}
