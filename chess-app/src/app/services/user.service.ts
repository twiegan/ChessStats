import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://infinite-river-70119.herokuapp.com/players/"
  constructor(private http: HttpClient) { }

  public loginUser(data: any) {
    return this.http.post(this.url, data);
  }
}