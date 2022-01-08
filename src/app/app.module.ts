import {Injectable, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {PublicServiceModule} from "./app-public-service/public-service.module";
import {PublicServiceRoutingModule} from "./app-public-service/public-service-routing.module";
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PublicServiceModule,
    PublicServiceRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
