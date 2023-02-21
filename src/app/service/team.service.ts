import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  REST_API: string = `${environment.baseUrl}`;
  constructor(private httpClient: HttpClient) {}

  getTeams() {
    let API_URL = `${this.REST_API}team/teams`;
    return this.httpClient.get(API_URL);
  }
}
