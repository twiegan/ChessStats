import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


import { FollowedPlayersService } from '../services/followed_players.service';


@Component({ templateUrl: 'followed.component.html', styleUrls: ['followed.component.css']})
export class FollowedComponent {
    step = 0;
    //public user_id: any
    //public user_id: any
    
    public dataSource: any;
    public user_id = localStorage.getItem('user_id');
    player_id = new FormControl('', [Validators.required, Validators.maxLength(45)]);

    constructor(private service: FollowedPlayersService, private snackBar: MatSnackBar) {
      if (this.user_id != null) {
        this.service.getFollows(this.user_id).subscribe(response => {
          console.log(response);
          // response.forEach(element => {
          //   this.dataDict[Object.keys(element)[0]] = Object.values(element)[0];
          // });
          // console.log(this.dataDict);
  
          this.dataSource = response;
        })
      } else {
        this.dataSource = null;
      }

      
    };


    getErrorMessage() {
      if (this.player_id.hasError('required')) {
        return 'You must enter a value';
      }
      return '';
    }

    isLoggedIn() {
      if (localStorage.getItem("user_id") == null) {
        return true;
      }
      else {
        return false;
      }
    }
  

    followPlayer() {
      var player = {
        username: this.user_id,
        player_id: this.player_id.value
      }
      this.service.followPlayer(player).subscribe(response => {
        console.log(response);
        if (Object.keys(response).length === Object.keys(player).length) {
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
    
  
    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
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