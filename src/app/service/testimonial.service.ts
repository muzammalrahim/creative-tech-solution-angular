import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  REST_API: string = `${environment.baseUrl}`;
  constructor(private httpClient: HttpClient) {}

  getTestimonials() {
    let API_URL = `${this.REST_API}testimonial/testimonials`;
    return this.httpClient.get(API_URL);
  }
}
