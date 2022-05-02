import * as _ from "lodash";

import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

// @Component({ templateUrl: 'home.component.html' })

// export class HomeComponent {

//   private players: any;
//   public strPlayers: any;
  
//   displayedColumns: string[] = ['player', 'elo', 'games_won', 'games_played']

//   constructor(private service: PlayerService) {
//     interface playerObj {
//       player: string;
//       elo: number;
//       games_won: number;
//       games_played: number;
//     }

//     this.service.getPlayers().subscribe(response => {
//       // for (let i = 0; i < response.length; i++) {
//       //   let currObj = response[i]
//       //   if (currObj.elo != null) {
//       //     const toPush = {player: currObj.player_id, elo: parseInt(currObj.elo), games_won: currObj.games_won, games_played: currObj.games_played} as playerObj
//       //     // console.log(toPush)
//       //     this.dataSource.push(toPush)
//       //   }
//       // }
//       temp.push({player: 'A--pawn', elo: 1608, games_won: 1, games_played: 1})
//       console.log(temp)



//       // var nonNull = []
//       // for (let i = 0; i < response.length; i++) {
//       //   if (response[i].elo != null) {
//       //     nonNull.push(response[i])
//       //   }
//       // }

//       // this.players = _.orderBy(nonNull, "elo", "desc")
//       // this.strPlayers = JSON.stringify(this.players, null, 4).replace(/\\n/g, "newline");
//       // console.log(response);
//       // console.log(this.strPlayers);
//     })
//   }
//   dataSource = temp;
// }

export interface playerObj {
  player: string;
  elo: number;
  games_won: number;
  games_played: number;
}

const ELEMENT_DATA: playerObj[] = [ ];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit{
  dataSource: playerObj[] = [];

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: PlayerService){
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.refresh()
  }

  refresh() {
    this.service.getPlayers().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        let currObj = response[i]
        if (currObj.elo != null) {
          const toPush = {player: currObj.player_id, elo: parseInt(currObj.elo), games_won: currObj.games_won, games_played: currObj.games_played} as playerObj
          // console.log(toPush)
          ELEMENT_DATA.push(toPush)
        }
      }
        
        
        // var temp = response;
        // console.log(response);
        // location.reload();
        // ELEMENT_DATA.push({player: 'A--pawn', elo: 1608, games_won: 1, games_played: 1});
      ELEMENT_DATA.sort((a,b) => b.elo - a.elo);
      this.dataSource = ELEMENT_DATA.slice(0, 20);
      console.log(ELEMENT_DATA);
    })
  }
  

  displayedColumns: string[] = ['player', 'elo', 'games_won', 'games_played'];
  
}
console.log(ELEMENT_DATA)

