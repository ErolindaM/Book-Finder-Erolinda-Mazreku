import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root',
})
export class BookService {
    private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

    constructor(private http: HttpClient) {}

    searchBooks(query: string, startIndex: number = 0, maxResults: number = 10): Observable<any> {
        const url = `${this.apiUrl}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`;
        return this.http.get(url);
    }
}
