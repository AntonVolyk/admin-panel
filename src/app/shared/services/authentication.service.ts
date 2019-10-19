import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,  private router: Router) {}

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
