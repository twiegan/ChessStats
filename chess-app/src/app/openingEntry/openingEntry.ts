import { Component } from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OpeningService } from '../services/opening.service';
@Component({
  templateUrl: 'openingEntry.component.html',
})

export class OpeningEntry {
  openingId = new FormControl('', [Validators.required, Validators.maxLength(45)]);
  name = new FormControl('', [Validators.required, Validators.maxLength(45)]);

  getErrorMessageOpeningid() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.name.hasError('maxlength')) {
      return 'Title can\'t be longer than 45 characters';
    }
    return '';
  }

  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  private opening: any;
  constructor(private service: OpeningService, private snackBar: MatSnackBar) {
    this.opening = {};
  }

  addOpening() {
    console.log(this.openingId.value);
    console.log(this.name.value);
    this.opening = { "opening_id": this.openingId.value, "name": this.name.value };
    this.service.addOpening(this.opening).subscribe(response => {
      console.log(response);
      if (Object.keys(response).length === Object.keys(this.opening).length) {
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