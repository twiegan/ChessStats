import { Component } from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PlayerService } from '../services/player.service';
@Component({
  selector: 'matchEntry.component.html',
  templateUrl: 'matchEntry.component.html',
})

export class MatchEntry {
  date = new FormControl('', [Validators.required]);
  white = new FormControl('', [Validators.required]);
  black = new FormControl('', [Validators.required]);

  playerId = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.maxLength(2)]);

  getErrorMessageDate() {
    if (this.date.hasError('pattern')) {
      console.log(this.date);
      return 'You must enter a valid date';
    }
    if (this.date.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

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
  constructor(private service: PlayerService, private snackBar: MatSnackBar) {
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
  templateUrl: '../successIndicator.component.html',
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
  templateUrl: '../failIndicator.component.html',
  styles: [
    `
    .snackBar {
      color: OrangeRed;
    }
  `,
  ],
})
export class failSnackBarComponent { }