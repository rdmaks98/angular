import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';

const routes: Routes = [
  {
    path:'technology',
    component:TechNewsComponent
  },
  {
    path:'',
    component:TopHeadingComponent
  },
  {
    path:'business',
    component:BusinessNewsComponent
  },
  {
    path:'entertainement',
    component:EntertainmentNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
