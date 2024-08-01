import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
signup() {
throw new Error('Method not implemented.');
}
  constructor(private router:Router){}

login() {
  this.router.navigate(['landing-page']);// redirect to login page after signup
}

}
