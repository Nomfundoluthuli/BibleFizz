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
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BibleComponent } from './bible/bible/bible.component';
// import { AuthserviceComponent } from './service/authservice/authservice.component';
// import { AuthServiceComponent } from './landing/pages/services/auth.service/auth.service.component';
// import { GuardsComponent } from './authguards/guards/guards.component';
// import { AuthServicesComponent } from './services/auth.services/auth.services.component';

 


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    XyzComponent,
    loginComponent,
    SignupComponent,
    WelcomeComponent,
    BibleComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
