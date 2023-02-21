import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  REST_API: string = `${environment.baseUrl}`;
  constructor(private httpClient: HttpClient) {}

  getPartners() {
    let API_URL = `${this.REST_API}partner/partners`;
    return this.httpClient.get(API_URL);
  }
}
