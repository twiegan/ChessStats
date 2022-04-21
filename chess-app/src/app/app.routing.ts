import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { PlayerEntry } from './playerEntry';
import { FollowedComponent } from './followed';
import { LoginComponent } from './login';
import { SearchComponent } from './search';
import { MatchEntry } from './matchEntry';
import { OpeningEntry } from './openingEntry';
import { EventEntry } from './eventEntry';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'playerEntry', component: PlayerEntry },
    { path: 'matchEntry', component: MatchEntry },
    { path: 'followed', component: FollowedComponent },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchComponent },
    { path: 'openingEntry', component: OpeningEntry },
    { path: 'eventEntry', component: EventEntry },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);