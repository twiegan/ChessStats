import { Component } from '@angular/core';
import { FollowedPlayersService } from '../services/followed_players.service';


@Component({ templateUrl: 'followed.component.html', styleUrls: ['followed.component.css']})
export class FollowedComponent {
    step = 0;
    //public user_id: any
    //public user_id: any
    
    public dataSource: any;
    public user_id = 'admin';
   
    constructor(private service: FollowedPlayersService){
      this.service.getFollows(this.user_id).subscribe(response => {
        console.log(response);
        // response.forEach(element => {
        //   this.dataDict[Object.keys(element)[0]] = Object.values(element)[0];
        // });
        // console.log(this.dataDict);

        this.dataSource = response;
      })

      
    };

    
  
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
