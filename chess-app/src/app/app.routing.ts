import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { PlayerEntry } from './playerEntry';
import { FollowedComponent } from './followed';
import { LoginComponent } from './login';
import { SearchComponent } from './search';
import { MatchEntry } from './matchEntry';
import { PlayerStats } from './playerStats';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'playerEntry', component: PlayerEntry },
    { path: 'matchEntry', component: MatchEntry },
    { path: 'followed', component: FollowedComponent },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchComponent },
    { path: 'playerStats', component: PlayerStats },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);