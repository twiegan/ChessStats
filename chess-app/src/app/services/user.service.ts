import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://infinite-river-70119.herokuapp.com/"
  //url = "http://127.0.0.1:8000/"
  constructor(private http: HttpClient) { }

  public loginUser(data: any) {
    return this.http.post(this.url + "login/", data);
  }

  public registerUser(data: any) {
    return this.http.post(this.url + "register/", data);
  }

  public resetUser(data: any) {
    return this.http.post(this.url + "reset/", data);
  }
}