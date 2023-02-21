import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// };

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  REST_API: string = `${environment.baseUrl}`;
  constructor(private httpClient: HttpClient) {}

  // add records

  // addBook(data: Book): Observable<any> {
  //   return this.httpClient.post<any>(this.REST_API, data, httpOptions);
  // }

  // get all books

  getBooks() {
    let API_URL = `${this.REST_API}service/services`;
    return this.httpClient.get(API_URL);
  }

  // get single book

  // getBook(id: any): Observable<any> {
  //   let API_URL = `${this.REST_API}/read-book/${id}`;
  //   return this.httpClient.get(API_URL, httpOptions);
  // }

  // update book

  // updateBook(id: any, data: any): Observable<any> {
  //   let API_URL = `${this.REST_API}/update-book/${id}`;
  //   return this.httpClient.put(API_URL, data, httpOptions);
  // }

  // delete book

  // deleteBook(id: any): Observable<any> {
  //   let API_URL = `${this.REST_API}/delete-book/${id}`;
  //   return this.httpClient.delete(API_URL, httpOptions);
  // }
}
