import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileuesrService {
  private apiUrl = 'https://bible-api.com/ruth+1,2,3,4';
  private url =''

  constructor(private http: HttpClient, private auth: AuthService) {}

  // Method to save user profile data
  saveProfile(data: FormData): Observable<any> {
    return this.http.post(this.apiUrl, data, { responseType: 'text' });
  }
 
  // Method to fetch user data based on logged-in user's ID
  getUserByLoggedInUserId(): Observable<any> {
    // Retrieve the logged-in user's ID
    const loggedInUserId = this.auth.getUserId();
    console.log("logged user " + loggedInUserId);

    // If user is not logged in, throw an error
    if (!loggedInUserId){
      throw new Error('User is not logged in');
    }

    // URL to fetch user data based on logged-in user's ID
    const url = `${this.apiUrl}/users/${loggedInUserId}`;
    console.log('Fetching user data for logged-in user from:', url);

    // Send GET request to fetch user data
    return this.http.get<any>(url).pipe(
      tap(data => console.log('Received user data:', data)), // Log the received user data
      catchError(error => {
        console.error('Error fetching user data:', error);
        throw error; // Rethrow the error to be handled by the component
      })
    );
  }

  
  getUserById(userId: string): Observable<any> {
    const url = `${this.apiUrl}/users/${userId}`;
    console.log(`Fetching user data for user ID ${userId} from:`, url);
    return this.http.get<any>(url).pipe(
      tap(data => console.log(`Received user data for user ID ${userId}:`, data)),
      catchError(error => {
        console.error(`Error fetching user data for user ID ${userId}:`, error);
        throw error; // Rethrow the error to be handled by the component
      })
    );
  }
}
  