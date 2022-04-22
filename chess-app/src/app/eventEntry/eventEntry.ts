import { Component } from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EventService } from '../services/event.service';
@Component({
  templateUrl: 'eventEntry.component.html',
})

export class EventEntry {
  eventId = new FormControl('', [Validators.required, Validators.maxLength(11)]);
  name = new FormControl('', [Validators.required, Validators.maxLength(45)]);

  getErrorMessageEventid() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.name.hasError('maxlength')) {
      return 'Event ID can\'t be longer than 11 characters';
    }
    return '';
  }

  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  private event: any;
  constructor(private service: EventService, private snackBar: MatSnackBar) {
    this.event = {};
  }

  addEvent() {
    console.log(this.eventId.value);
    console.log(this.name.value);
    this.event = { "event_id": this.eventId.value, "name": this.name.value };
    this.service.addEvent(this.event).subscribe(response => {
      console.log(response);
      if (Object.keys(response).length === Object.keys(this.event).length) {
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