import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontEndDeveloperModule } from './frontend-developer/frontend-developer.module';
import { BackendDeveloperModule } from './backend-developer/backend-developer.module';
import { FullstackDeveloperModule } from './fullstack-developer/fullstack-developer.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontEndDeveloperModule,
    BackendDeveloperModule,
    FullstackDeveloperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
