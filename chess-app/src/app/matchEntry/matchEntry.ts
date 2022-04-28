import { Component } from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DateService } from '../services/date.service';
import { MatchService } from '../services/match.service';

interface Player {
  id: string;
  color: string;
}
@Component({
  selector: 'matchEntry.component.html',
  templateUrl: 'matchEntry.component.html',
})


export class MatchEntry {
  date = new FormControl('', [Validators.required]);
  white = new FormControl('', [Validators.required]);
  black = new FormControl('', [Validators.required]);
  turns = new FormControl('', [Validators.required]);
  termination = new FormControl('', [Validators.required]);
  timeControl = new FormControl('', [Validators.required]);
  opening = new FormControl('', [Validators.required]);
  event = new FormControl('', [Validators.required]);

  players: Player[] = [
    { id: '', color: "white"},
    { id: '', color: "black"},
  ]

  playerId = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.maxLength(2)]);

  getErrorMessageDate() {
    if (this.date.hasError('pattern')) {
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

  private dateTime: any;
  private date_utc: string;
  private time_utc: string;
  private weekday: string;
  private match: any;
  winner: string;

  constructor(private service: MatchService, private snackBar: MatSnackBar) {
    this.dateTime = {};
    this.date_utc = '';
    this.time_utc = '';
    this.weekday = '';
    this.winner = '';
    this.match = {};
  }

  dateUpdated() {
    console.log('dateChanged');
    var dateTime = this.date.value.utc();
    this.date_utc = dateTime.format("YYYY.MM.DD");
    this.time_utc = dateTime.format("HH:mm:ss")
    this.weekday = dateTime.format("dddd");
    this.dateTime = { "date_utc": this.date_utc, "time_utc": this.time_utc, "weekday": this.weekday }
  }

  playerUpdated() {
    this.players[0].id = this.white.value;
    this.players[1].id = this.black.value;
  }

  addMatch() {
    console.log(this.dateTime);
    console.log(this.white.value);
    console.log(this.black.value);
    console.log(this.turns.value);
    console.log(this.termination.value);
    console.log(this.timeControl.value);
    console.log('winner: ' + this.winner);
    console.log(this.opening.value);
    console.log(this.event.value);


    this.match = { "white": this.white.value, "black": this.black.value, "turns": this.turns.value, "termination": this.termination.value, "time_control": this.timeControl.value, "winner": this.winner, "event": this.event.value, "opening": this.opening.value };
    this.service.addMatch(this.match).subscribe(response => {
      console.log(response);
      if (Object.keys(response).length === Object.keys(this.match).length) {
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