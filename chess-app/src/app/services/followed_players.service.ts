import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FollowedPlayers } from './followed_players';

@Injectable({
    providedIn: 'root'
  })
  export class FollowedPlayersService {
    url = "https://infinite-river-70119.herokuapp.com/search/follow/"
    constructor(private http: HttpClient) { }

    public getFollows(user_id: any): Observable<FollowedPlayers[]> {
        return this.http.get<FollowedPlayers[]>(this.url + user_id)
    }

    public followPlayer(data: any) {
      this.url = "https://infinite-river-70119.herokuapp.com/follow/"
      console.log("trying to print in servcie", data);
      return this.http.post(this.url, data);
    }
  }