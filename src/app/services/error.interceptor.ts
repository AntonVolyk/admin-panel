import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '@shared/services/authentication.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        const errorMessage = error.error instanceof ErrorEvent ?
          `Error: ${error.error.message}` : `Error Code: ${error.status}\nMessage: ${error.message}`;
        if (error.status === 401 || error.status === 403) {
          this.authenticationService.logout();
        }
        return throwError(errorMessage);
      })
    );
  }
}
