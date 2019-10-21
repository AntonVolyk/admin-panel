import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '@shared/models/user';
import {environment} from '@environments/environment';
import {Post} from '@shared/models/post';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class UsersDataService {
  quickFilterValue = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(`${environment.jsonPlaceholder}/users`).toPromise();
  }

  getPosts(): Promise<Post[]> {
    return this.http.get<Post[]>(`${environment.jsonPlaceholder}/posts`).toPromise();
  }
}
