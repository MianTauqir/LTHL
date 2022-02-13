import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LTHLLEADERComponent } from './Components/lthl-leader/lthl-leader.component';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    AppComponent,
    LTHLLEADERComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }