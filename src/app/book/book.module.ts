import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/search-result/search-result.component';



@NgModule({
  declarations: [
    BookComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
