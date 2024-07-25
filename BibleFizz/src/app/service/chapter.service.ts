import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private tokenKey = 'token'; // Key for localStorage
  private baseUrl = 'https://bible-api.com'; // Base URL

  constructor(private http: HttpClient) { }

  getVerse(chapter: number, verse: number): Observable<any> {
    const apiUrl = `${this.baseUrl}/ruth+${chapter}:${verse}`;
    return this.http.get<any>(apiUrl);
  }

  signup(data: { email: string, password: string, confirmPassword: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  signin(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
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
