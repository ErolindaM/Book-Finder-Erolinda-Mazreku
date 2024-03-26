import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  query: string = '';

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onSearch(): void {
    this.search.emit(this.query.trim());
  }
}
