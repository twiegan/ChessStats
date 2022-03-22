import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  url = "https://infinite-river-70119.herokuapp.com/players/"
  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get(this.url)
  }

  addPlayer(data: any) {
    return this.http.post(this.url, data)
  }
}