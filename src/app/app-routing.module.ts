import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ViewDetailsComponent } from './book/view-details/view-details.component';

const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'view-details/:id', component: ViewDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
