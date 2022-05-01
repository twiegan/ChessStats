import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userId = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirm_pass = new FormControl('', [Validators.required]);

  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter your password';
    }
    return '';
  }

  getErrorMessageUserid() {
    if (this.userId.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  private user: any;
  constructor(private service: UserService, private snackBar: MatSnackBar) {
    this.user = {};
  }

  registerUser() {
    if (this.password.value.localeCompare(this.confirm_pass.value) != 0) {
      this.snackBar.openFromComponent(failSnackBarComponent, {
        duration: 2000,
      });
      return;
    }
    this.user = { "user_id": this.userId.value, "password": this.password.value };
    this.service.registerUser(this.user).subscribe(response => {
      let JResponse = JSON.parse(JSON.stringify(response));
      console.log(JResponse);
      if (JResponse.Success.localeCompare('True') == 0) {
        this.snackBar.openFromComponent(successSnackBarComponent, {
          duration: 2000,
        });
      }
      else {
        this.snackBar.openFromComponent(failonuserSnackBarComponent, {
          duration: 2000,
        });
      }
    }, error => {
      this.snackBar.openFromComponent(failSnackBarComponent, {
        duration: 2000,
      });
    });
  }
}

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

@Component({
  selector: 'failonuser-component',
  templateUrl: 'failonuserIndicator.component.html',
  styles: [
    `
    .snackBar {
      color: OrangeRed;
    }
  `,
  ],
})
export class failonuserSnackBarComponent { }

@Component({
  selector: 'success-component',
  templateUrl: 'successIndicator.component.html',
  styles: [
    `
    .snackBar {
      color: White;
    }
  `,
  ],
})
export class successSnackBarComponent { }