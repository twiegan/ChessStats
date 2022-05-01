import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PlayerService } from '../services/player.service';

import { ChartType, Chart } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  templateUrl: 'playerStats.component.html',
})

export class PlayerStats {
  playerId = new FormControl('', [Validators.required]);

  getErrorMessagePlayerid() {
    if (this.playerId.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  public player: any;
  public player_id: any;
  public player_title: any;
  public player_elo: any;
  public player_games_played: any;
  public player_games_won: any;
  public player_win_loss: any;
  public player_matches: any;

  constructor(private service: PlayerService, private snackBar: MatSnackBar) {}

  clickEvent(playerId: any) {
    this.service.getPlayer(playerId.value).subscribe(response => {
        this.player = response;
        this.player_id = response.player_id;
        this.player_title = response.title;
        this.player_elo = response.elo;
        this.player_games_played = response.games_played;
        this.player_games_won = response.games_won;
        this.player_win_loss = (this.player_games_won) / (this.player_games_played - this.player_games_won);
        return this.player;
    }) 

    this.service.getMatches(playerId.value).subscribe(response => {
      this.player_matches = response;
      return this.player_matches;
  }) 
  }
}

@Component({
  selector: 'success-component',
  templateUrl: 'successIndicator.component.html',
  styles: [
    `
    .snackBar {
      color: LightGreen;
    }
  `,
  ],
})
export class successSnackBarComponent { }

@Component({
  selector: 'fail-component',
  templateUrl: 'failIndicator.component.html',
  styles: [
    `
    .snackBar {
      color: OrangeRed;
    }
  `,
  ],
})
export class failSnackBarComponent { }