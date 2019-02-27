import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavigationComponent } from './navigationPage/home-navigation/home-navigation.component';
import { GenerateJournalEntryListComponent } from './generate-journal-entry-list/generate-journal-entry-list.component';
import { IframePageComponent } from './iframe-page/iframe-page.component';
import { DdrNavPageComponent } from './ddr-nav-page/ddr-nav-page.component';
import { HomePageComponent } from './navigationPage/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavigationComponent,
    GenerateJournalEntryListComponent,
    IframePageComponent,
    DdrNavPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
