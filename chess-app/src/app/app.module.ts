import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { PlayerEntry } from './playerEntry';
import { MatchEntry } from './matchEntry';
import { FollowedComponent } from './followed';
import { LoginComponent } from './login';
import { SearchComponent } from './search';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


const mat = [
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatToolbarModule,
  ReactiveFormsModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerEntry,
    MatchEntry,
    FollowedComponent,
    LoginComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    HttpClientModule,
    ...mat,
  ],
  exports: [
    ...mat,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }