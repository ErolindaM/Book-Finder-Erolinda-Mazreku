import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [
    BookComponent,
    SearchBoxComponent,
    SearchResultComponent,
    ViewDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BookRoutingModule
  ],
  exports:[
    BookComponent
  ]
})
export class BookModule { }
