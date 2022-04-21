import { Component } from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PlayersService } from '../services/players.service';
@Component({
  templateUrl: 'playerEntry.component.html',
})

export class PlayerEntry {
  playerId = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.maxLength(2)]);

  getErrorMessageTitle() {
    if (this.title.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.title.hasError('maxlength')) {
      return 'Title can\'t be longer than 2 characters';
    }
    return '';
  }

  getErrorMessagePlayerid() {
    if (this.playerId.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  private player: any;
  constructor(private service: PlayersService, private snackBar: MatSnackBar) {
    this.player = {};
  }

  addPlayer() {
    console.log(this.playerId.value);
    console.log(this.title.value);
    this.player = { "player_id": this.playerId.value, "title": this.title.value };
    this.service.addPlayer(this.player).subscribe(response => {
      console.log(response);
      if (Object.keys(response).length === Object.keys(this.player).length) {
        this.snackBar.openFromComponent(successSnackBarComponent, {
          duration: 2000,
        });
        return;
      }
    }, error => {
      this.snackBar.openFromComponent(failSnackBarComponent, {
        duration: 2000,
      });
    });
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