import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  REST_API: string = `${environment.baseUrl}`;
  constructor(private httpClient: HttpClient) {}

  getFaqs() {
    let API_URL = `${this.REST_API}faq/faq`;
    return this.httpClient.get(API_URL);
  }
}
