import { Component } from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PlayersService } from '../services/players.service';
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

  private player: any;
  public strPlayer: any;
  constructor(private service: PlayersService, private snackBar: MatSnackBar) {
        
  }

  test(playerId: any) {
    this.service.getPlayer(playerId.value).subscribe(response => {
        this.player = response;
        this.strPlayer = JSON.stringify(response, null, 4).replace(/\\n/g, "newline");
        return this.strPlayer;
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