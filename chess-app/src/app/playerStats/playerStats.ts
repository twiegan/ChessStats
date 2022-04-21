import { Component } from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PlayerService } from '../services/player.service';
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
  constructor(private service: PlayerService, private snackBar: MatSnackBar) {}

  test(playerId: any) {
    this.service.getPlayer(playerId.value).subscribe(response => {
        this.player = JSON.stringify(response, null, 4).replace(/\\n/g, "newline");
        return this.player;
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