import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from './event'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = "https://infinite-river-70119.herokuapp.com/events/"
  constructor(private http: HttpClient) { }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }

  public addEvent(data: any) {
    return this.http.post(this.url, data);
  }
}