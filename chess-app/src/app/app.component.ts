import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  isHidden: boolean = false

  constructor(private router: Router) {
  }

  getVal() {
    if (localStorage.getItem("user_id") == null) {
      this.isHidden = true;
      return "Login";
    }
    else {
      this.isHidden = false;
      return "Logout";
    }
  }
  login_logout() {
    if (localStorage.getItem("user_id") != null) {
      localStorage.removeItem("user_id");
    }
    else {
      this.router.navigate(['login']);
    }


  }
  title = 'chess-app';
}