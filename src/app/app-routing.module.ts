import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeNavigationComponent } from './navigationPage/home-navigation/home-navigation.component';
import { IframePageComponent } from './iframe-page/iframe-page.component';
import { GenerateJournalEntryListComponent } from './generate-journal-entry-list/generate-journal-entry-list.component';
import { DdrNavPageComponent } from './ddr-nav-page/ddr-nav-page.component';
import { HomePageComponent } from './navigationPage/home-page/home-page.component';

const routes: Routes = [
   {
    /* 路由入口 */
    path: '',
    redirectTo: '/HomePageNavigationComponent',
    pathMatch: 'full'
  },
  {
    path: 'HomePageNavigationComponent',
    component: HomeNavigationComponent
  },
  {
    path: 'IframePage',
    component: IframePageComponent
  },
  {
    path: 'GenerateJournalEntryList',
    component: GenerateJournalEntryListComponent
  },
  {
    path: 'DdrNavPage',
    component: DdrNavPageComponent
  }
  ,
  {
    path: 'HomePage',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
