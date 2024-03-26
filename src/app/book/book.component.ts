import { Component } from '@angular/core';
import { BookService } from './book-service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  searchResults: any[] = [];
  isLoading: boolean = false; // Add isLoading flag

  constructor(private bookService: BookService) {}

  
  ngOnInit(): void {
    this.fetchDefaultBooks();
  }

  onSearch(query: string): void {
    if (query.trim() === '') {
      this.fetchDefaultBooks();
    } else {
      this.searchBooks(query);
    }
  }

  fetchDefaultBooks(): void {
    this.isLoading = true; // Set isLoading to true before fetching
    const defaultBooks = ['Angular Development','Java'];

    for (let term of defaultBooks) {
      this.bookService.searchBooks(term).subscribe(
        (data: any) => {
          this.isLoading = false; // Set isLoading to false when data is fetched
          this.searchResults.push(...data.items);
        },
        (error) => {
          this.isLoading = false; // Set isLoading to false on error
          console.error('Error fetching default books:', error);
        }
      );
    }
  }

  searchBooks(query: string): void {
    this.isLoading = true; // Set isLoading to true before fetching
    this.bookService.searchBooks(query).subscribe(
      (data: any) => {
        this.isLoading = false; // Set isLoading to false when data is fetched
        this.searchResults = data.items;
      },
      (error) => {
        this.isLoading = false; // Set isLoading to false on error
        console.error('Error fetching search results:', error);
      }
    );
  }
}
