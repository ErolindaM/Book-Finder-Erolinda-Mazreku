import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchQuery = new FormControl('', Validators.required);

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onSearch(): void {
    if (this.searchQuery.valid) {
      this.search.emit(this.searchQuery.value.trim());
    }
  }
}

