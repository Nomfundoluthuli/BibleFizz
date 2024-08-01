import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BibleComponent } from './bible/bible/bible.component';
import { FavouriteComponent } from './favourites/favourites.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'landing',component:LandingComponent},
  {path:'signup',component:SignupComponent},
  {path:"", redirectTo:"landing", pathMatch:"full"},
  {path:'welcome',component:WelcomeComponent},
  {path:'bible',component:BibleComponent},
  {path:'Favourites',component:FavouriteComponent},
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
