import { Component } from '@angular/core';

export interface MatchItem {
  match: string;
  date: string;
  color: string;
  winner: string;
}

const MATCH_DATA: MatchItem[] = [
  {match: "match1", date: "Monday 12/2/2004", color: "Black", winner: "Black Win"},
  {match: "match2", date: "Monday 1/8/2005", color: "White", winner: "Black Win"},
  {match: "match3", date: "Monday 4/16/2005", color: "Black", winner: "White Win"}
];

@Component({ templateUrl: 'followed.component.html', styleUrls: ['followed.component.css']})
export class FollowedComponent {
    step = 0;
    sampleData = [
                  {'A': "player1", 'B': "gm", 'C': 2900},
                  {'A': "player2", 'B': "bm", 'C': 1600},
                  {'A': "player3", 'B': "gf", 'C': 420},
                  {'A': "player4", 'B': "bm", 'C': 1600},
                  {'A': "player5", 'B': "bm", 'C': 1600},
                  {'A': "player6", 'B': "bm", 'C': 1600},
                  {'A': "player7", 'B': "bm", 'C': 1600},
                  {'A': "player8", 'B': "bm", 'C': 1600},
                ];

    

    displayedColumns: string[] = ['match', 'date', 'color', 'winner'];
    dataSource = MATCH_DATA;
    
  
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
