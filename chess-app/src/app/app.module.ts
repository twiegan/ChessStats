import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { EntryComponent } from './entry';
import { FollowedComponent } from './followed';
import { LoginComponent } from './login';
import { SearchComponent } from './search';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';

const mat = [
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent,
    FollowedComponent,
    LoginComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    ...mat,
  ],
  exports: [
    ...mat,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }