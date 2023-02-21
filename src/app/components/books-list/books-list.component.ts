import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/Service';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  books: Service[] = [];
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService
      .getBooks()
      .subscribe((res: any) => (this.books = res.data));
  }
}
