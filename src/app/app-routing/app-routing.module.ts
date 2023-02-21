import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from '../components/add-book/add-book.component';
import { BookDetailComponent } from '../components/book-detail/book-detail.component';
import { BooksListComponent } from '../components/books-list/books-list.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: 'books-list', component: BooksListComponent },
  // { path: 'add-book', component: AddBookComponent },
  // { path: 'edit-book/:id', component: BookDetailComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
