import { Component} from '@angular/core';
import { AnyForUntypedForms, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

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

  loginUser() {
    this.user = { "user_id": this.userId.value, "password": this.password.value };
    this.service.loginUser(this.user).subscribe(response => {
      console.log(response);
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