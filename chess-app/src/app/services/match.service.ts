import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from './match'

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  url = "https://infinite-river-70119.herokuapp.com/matches/"
  constructor(private http: HttpClient) { }

  public getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.url);
  }

  public addMatch(data: any) {
    return this.http.post(this.url, data);
  }
}