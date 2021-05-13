import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// if you make new page and call in url so put component and run in the app
import { GameComponent } from './game/game.component';

// give route and run this app
const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
