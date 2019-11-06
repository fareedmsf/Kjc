import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { jqueryclass } from './shared/jquery.service';
import { MainComponent } from './main/main.component';
import { MaintopComponent } from './maintop/maintop.component';
import { MainsideComponent } from './mainside/mainside.component';
import { MainfooterComponent } from './mainfooter/mainfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    SidenavComponent,
    TopnavComponent,
    MainComponent,
    MaintopComponent,
    MainsideComponent,
    MainfooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [jqueryclass],
  bootstrap: [AppComponent]
})
export class AppModule { }
