import { Component} from '@angular/core';
import { BookService } from './book-service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  searchResults: any[] = [];
  isLoading: boolean = false;
  showLoadMoreButton: boolean = false;
  startIndex: number = 0;
  maxResults: number = 10;
  currentQuery: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.fetchDefaultBooks();
  }

  onSearch(query: string): void {
    this.currentQuery = query.trim();
    if (this.currentQuery === '') {
      this.fetchDefaultBooks();
    } else {
      this.searchBooks(this.currentQuery);
    }
  }

  fetchDefaultBooks(): void {
    this.isLoading = true;
    const defaultBooks = ['Web Development'];

    for (let term of defaultBooks) {
      this.bookService.searchBooks(term, this.startIndex, this.maxResults).subscribe(
        (data: any) => {
          this.isLoading = false;
          this.searchResults.push(...data.items);
          this.checkLoadMoreButton();
        },
        (error) => {
          this.isLoading = false;
          console.error('Error fetching default books:', error);
        }
      );
    }
  }
  
  searchBooks(query: string): void {
    this.isLoading = true;
    this.bookService.searchBooks(query).subscribe(
      (data: any) => {
        this.isLoading = false;
        this.searchResults = data.items;
        this.checkLoadMoreButton();
      },
      (error) => {
        this.isLoading = false;
        console.error('Error fetching search results:', error);
      }
    );
  }

  loadMore(): void {
    this.isLoading = true;
    this.startIndex += this.maxResults;

    if (this.currentQuery === '') {
      this.fetchDefaultBooks();
    } else {
      this.bookService.searchBooks(this.currentQuery, this.startIndex, this.maxResults).subscribe(
        (data: any) => {
          this.isLoading = false;
          this.searchResults.push(...data.items);
          this.checkLoadMoreButton();
        },
        (error) => {
          this.isLoading = false;
          console.error('Error fetching more books:', error);
        }
      );
    }
  }

  checkLoadMoreButton(): void {
    this.showLoadMoreButton = this.searchResults.length % this.maxResults === 0;
  }
}
