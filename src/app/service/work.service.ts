import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  REST_API: string = `${environment.baseUrl}`;
  constructor(private httpClient: HttpClient) {}

  getWorks() {
    let API_URL = `${this.REST_API}user/users`;
    return this.httpClient.get(API_URL);
  }
}
