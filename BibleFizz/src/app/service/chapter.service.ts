import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private tokenKey = 'token'; // Key for localStorage

  private apiUrl = 'https://bible-api.com/ruth+1,2,3,4'; // Adjusted URL format
  
  constructor(private http: HttpClient) { }

  getBible(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  signup(data: {email: string, password: string, confirmPassword:string}):Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  signin(credentials: {email: string, password: string }):Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}


