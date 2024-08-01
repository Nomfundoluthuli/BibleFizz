import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { XyzComponent } from './navbar/xyz.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BibleComponent } from './bible/bible/bible.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FavouriteComponent } from './favourites/favourites.component';

 

 @NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    XyzComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    BibleComponent,
    FavouriteComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
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
