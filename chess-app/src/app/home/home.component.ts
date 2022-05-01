import { Component } from '@angular/core';

import { PlayerService } from '../services/player.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {

  private players: any;
  public strPlayers: any;
  constructor(private service: PlayerService) {
    this.service.getPlayers().subscribe(response => {
      this.players = response;
      this.strPlayers = JSON.stringify(response, null, 4).replace(/\\n/g, "newline");
      console.log(response);
      console.log(this.strPlayers);
    })
  }
}
