import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  REST_API: string = `${environment.baseUrl}`;
  constructor(private httpClient: HttpClient) {}

  getBanners() {
    let API_URL = `${this.REST_API}banner/banners`;
    return this.httpClient.get(API_URL);
  }
}
