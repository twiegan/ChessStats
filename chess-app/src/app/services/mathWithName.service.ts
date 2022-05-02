import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MatchWithName } from './matchWithName'

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  url = "https://infinite-river-70119.herokuapp.com/matches/"
  constructor(private http: HttpClient) { }

  public getMatches(): Observable<MatchWithName[]> {
    return this.http.get<MatchWithName[]>(this.url);
  }
}