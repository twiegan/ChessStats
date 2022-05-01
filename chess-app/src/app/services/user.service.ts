import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://127.0.0.1:8000/"//"https://infinite-river-70119.herokuapp.com/"
  constructor(private http: HttpClient) { }

  public loginUser(data: any) {
    return this.http.post(this.url + "login/", data);
  }

  public registerUser(data: any) {
    return this.http.post(this.url + "register/", data);
  }
}