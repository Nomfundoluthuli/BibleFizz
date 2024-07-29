import { Component, OnInit } from '@angular/core';
import { ProfileuesrService } from '../service/profileuesr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
userInfo: any = {}; // Initialize userInfo object to store user information
username: any;
email: any;
favoriteVerses: any;
favourites: any;
  
    constructor(private profile: ProfileuesrService) {}
  
    ngOnInit(): void {
      console.log(" profile");
  
      // Call ProfileService to fetch user data for the logged-in user
      this.profile.getUserByLoggedInUserId().subscribe(
        (data: any) => {
          this.userInfo = data; // Assign fetched user data to userInfo object
          console.log(this.userInfo); // Log the retrieved userInfo
        },
        (error) => {
          console.error('Error fetching user information:', error); // Log error if fetching user data fails
        }
      );
    }
  }
  