import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  username: string = 'Nomfundo.luth';
  email: string = 'nomfund.luthu@example.com';
  favoriteVerses: string[] = [
    'John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
    'Philippians 4:13 - I can do all this through him who gives me strength.'
  ];
}