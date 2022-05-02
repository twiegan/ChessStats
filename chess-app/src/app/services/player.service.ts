import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from './player'
import { MatchWithName } from './matchWithName';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url = "https://infinite-river-70119.herokuapp.com/players/"
  matchUrl = "https://infinite-river-70119.herokuapp.com/search/player/"
  topUrl = "https://infinite-river-70119.herokuapp.com/topPlayers/"
  ret: any
  constructor(private http: HttpClient) { }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url);
  }

  public getTopPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.topUrl)
  }

  public getPlayer(playerId: any): Observable<Player> {
    return this.http.get<Player>(this.url + playerId)
  }
  
  public getMatches(playerId: any): Observable<MatchWithName> {
    return this.http.get<MatchWithName>(this.matchUrl + playerId);
  }

  public addPlayer(data: any) {
    return this.http.post(this.url, data);
    // console.log(this.ret);
    // return this.ret;
  }
}