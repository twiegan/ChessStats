import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Date } from './date'

@Injectable({
  providedIn: 'root'
})
export class DateService {
  url = "https://infinite-river-70119.herokuapp.com/dates/"
  constructor(private http: HttpClient) { }

  public getDates(): Observable<Date[]> {
    return this.http.get<Date[]>(this.url);
  }

  public addDate(data: any) {
    return this.http.post(this.url, data);
  }
}