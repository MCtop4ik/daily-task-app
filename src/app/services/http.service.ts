import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'http://sparkydolphins.ru/api';

  constructor(private http: HttpClient) {}

  getBaseUrl(): string {
    return this.baseUrl;
  }

   getOptions() {
    const http_options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return http_options;
  }

  getTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tasks`, this.getOptions());
  }


}
