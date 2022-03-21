import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { EntryComponent } from './entry';
import { FollowedComponent } from './followed';
import { LoginComponent } from './login';
import { SearchComponent } from './search';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'entry', component: EntryComponent },
    { path: 'followed', component: FollowedComponent },
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);