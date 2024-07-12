import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private apiUrl = 'https://bible-api.com/ruth+1,2,3,4'; // Adjusted URL format

  constructor(private http: HttpClient) { }

  getBible(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
