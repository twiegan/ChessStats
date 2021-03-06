import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { PlayerEntry } from './playerEntry';
import { MatchEntry } from './matchEntry';
import { FollowedComponent } from './followed';
import { AuthModule } from './auth/auth.module';
import { OpeningEntry } from './openingEntry';
import { EventEntry } from './eventEntry';
import { PlayerStats } from './playerStats';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';


import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import { ChartsModule } from 'ng2-charts';


const mat = [
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  ReactiveFormsModule,
  MatDividerModule,
  MatListModule,
  NgxMatMomentModule,
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  MatTableModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerEntry,
    MatchEntry,
    FollowedComponent,
    OpeningEntry,
    EventEntry,
    PlayerStats,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    HttpClientModule,
    AuthModule,
    RouterModule,
    ChartsModule,
    ...mat,
  ],
  exports: [
    ...mat,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }