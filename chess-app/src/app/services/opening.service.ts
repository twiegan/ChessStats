import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Opening } from './opening'

@Injectable({
  providedIn: 'root'
})
export class OpeningService {
  url = "https://infinite-river-70119.herokuapp.com/openings/"
  constructor(private http: HttpClient) { }

  public getOpening(): Observable<Opening[]> {
    return this.http.get<Opening[]>(this.url);
  }

  public addOpening(data: any) {
    return this.http.post(this.url, data);
  }
}