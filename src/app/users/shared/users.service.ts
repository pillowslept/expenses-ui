import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  private url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  getUser(id): Observable<any> {
    return this.http.get(this.getUserUrl(id));
  }

  addUser(user): Observable<any> {
    return this.http.post(this.url, JSON.stringify(user));
  }

  updateUser(user): Observable<any> {
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user));
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(this.getUserUrl(id));
  }

  private getUserUrl(id){
    return this.url + '/' + id;
  }
}
