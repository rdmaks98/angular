import { NgModule } from '@angular/core'; 
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent  } from './components/login/login.component';
import { FacebookGuard } from './guards/facebook.guard';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate: [FacebookGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
