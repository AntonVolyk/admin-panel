import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {User} from '@shared/models/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: User;

  constructor(private http: HttpClient,  private router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.authService}/admin-panel/login`, {username, password})
      .pipe(map(data => {
        localStorage.setItem('user', JSON.stringify(data));
        return data;
      }));
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
