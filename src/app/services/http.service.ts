import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // private baseUrl = 'https://sparkydolphins.ru/api';
  private baseUrl = 'http://localhost:5000';

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

  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    };
  
    return this.http.post(`${this.baseUrl}/login`, body, this.getOptions());
  }

  createTask(task: string, date: string): Observable<any> {
    const body = {
      task: task,
      date: date,
      image: null,
      solution: null
    };
  
    return this.http.post(`${this.baseUrl}/create-task`, body, this.getOptions());
  }

  editTask(task: string, date: string): Observable<any> {
    const body = {
      task: task,
      date: date,
      image: null,
      solution: null
    };
  
    return this.http.post(`${this.baseUrl}/delete-task`, body, this.getOptions());
  }

  deleteTask(task_id: number): Observable<any> {
    const body = {
      task_id: task_id
    };
  
    return this.http.post(`${this.baseUrl}/delete-task`, body, this.getOptions());
  }
}
