import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { loginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BibleComponent } from './bible/bible/bible.component';
import { ProfileComponent } from './profile/profile.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  {path:'login', component:loginComponent},
  {path:'landing',component:LandingComponent},
  {path:'signup',component:SignupComponent},
  {path:"", redirectTo:"landing", pathMatch:"full"},
  {path:'welcome',component:WelcomeComponent},
  {path:'bible',component:BibleComponent},
  {path:'profile',component:ProfileComponent},
  {path:'favourite',component:FavouriteComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
