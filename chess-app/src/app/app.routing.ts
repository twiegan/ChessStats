import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { PlayerEntry } from './playerEntry';
import { FollowedComponent } from './followed';
import { MatchEntry } from './matchEntry';
import { OpeningEntry } from './openingEntry';
import { EventEntry } from './eventEntry';
import { PlayerStats } from './playerStats';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'playerEntry', component: PlayerEntry },
    { path: 'matchEntry', component: MatchEntry },
    { path: 'followed', component: FollowedComponent },
    { path: 'openingEntry', component: OpeningEntry },
    { path: 'eventEntry', component: EventEntry },
    { path: 'playerStats', component: PlayerStats },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);