import { Component } from '@angular/core';

import { PlayersService } from '../services/players.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {

  private players: any;
  public strPlayers: any;
  constructor(private service: PlayersService) {
    this.service.getPlayers().subscribe(response => {
      this.players = response;
      this.strPlayers = JSON.stringify(response, null, 4).replace(/\\n/g, "newline");
      console.log(response);
      console.log(this.strPlayers);
    })
  }
}
