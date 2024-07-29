import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { XyzComponent } from './navbar/xyz.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { loginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { Router } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BibleComponent } from './bible/bible/bible.component';
import { ProfileComponent } from './profile/profile.component';
import { FavouriteComponent } from './favourite/favourite.component';

 

 @NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    XyzComponent,
    loginComponent,
    SignupComponent,
    WelcomeComponent,
    BibleComponent,
    ProfileComponent,
    FavouriteComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
   
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
