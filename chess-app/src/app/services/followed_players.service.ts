import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FollowedPlayers } from './followed_players';

@Injectable({
    providedIn: 'root'
  })
  export class FollowedPlayersService {
    url = "http://127.0.0.1:8000/search/follow/"
    constructor(private http: HttpClient) { }

    public getFollows(user_id: any): Observable<FollowedPlayers[]> {
        return this.http.get<FollowedPlayers[]>(this.url + user_id)
    }
  }