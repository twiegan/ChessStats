import * as _ from "lodash";

import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../services/player.service';
import {MatSort, Sort} from '@angular/material/sort';


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


  constructor(private service: PlayerService){
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.dataSource = [];
    this.service.getPlayers().subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        let currObj = response[i]
        if (currObj.elo != null) {
          const toPush = {player: currObj.player_id, elo: parseInt(currObj.elo), games_won: currObj.games_won, games_played: currObj.games_played} as playerObj
          // console.log(toPush)
          ELEMENT_DATA.push(toPush)
        }
      }
        
      ELEMENT_DATA.sort((a,b) => b.elo - a.elo);
      this.dataSource = ELEMENT_DATA.slice(0, 20);
      console.log(ELEMENT_DATA);
    })
  }
  

  displayedColumns: string[] = ['player', 'elo', 'games_won', 'games_played'];
  
}
console.log(ELEMENT_DATA)

