import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Player } from './player'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url = "https://infinite-river-70119.herokuapp.com/players/"
  constructor(private http: HttpClient) { }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url);
  }

  public getPlayer(playerId: any): Observable<Player> {
    return this.http.get<Player>(this.url + playerId)
  }

  public addPlayer(data: any) {
    return this.http.post(this.url, data);
  }
}