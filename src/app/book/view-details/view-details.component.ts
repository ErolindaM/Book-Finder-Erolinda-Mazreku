import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book-service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  bookDetails: any;
  truncatedDescription: string = '';
  showFullDescription: boolean = false;
  descriptionWordCount: number = 0;

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const bookId = params['id'];
      this.fetchBookDetails(bookId);
    });
  }

  fetchBookDetails(bookId: string): void {
    this.bookService.getBookById(bookId).subscribe(
      (data: any) => {
        this.bookDetails = data;
        this.truncateDescription();
      },
      (error) => {
        console.error('Error fetching book details:', error);
      }
    );
  }

  toggleDescription(): void {
    this.showFullDescription = !this.showFullDescription;
  }

  truncateDescription(): void {
    if (this.bookDetails && this.bookDetails.volumeInfo && this.bookDetails.volumeInfo.description) {
      const maxLength = 800;
      const description = this.bookDetails.volumeInfo.description;
      if (description.length > maxLength) {
        this.truncatedDescription = description.substring(0, maxLength) + '...';
      } else {
        this.truncatedDescription = description;
      }

      this.descriptionWordCount = description.split(/\s+/).length;
    }
  }

  shouldShowReadMore(): boolean {
    return this.descriptionWordCount > 100;
  }
}
