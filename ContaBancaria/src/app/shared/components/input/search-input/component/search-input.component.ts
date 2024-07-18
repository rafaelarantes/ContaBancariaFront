import { Component } from '@angular/core';

import { FilterSearchServiceService } from '../services/filter-search-service.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  search: string = '';

  constructor(private filterSearchServiceService: FilterSearchServiceService) {}

  filter() {
    this.filterSearchServiceService.setSearch(this.search);
  }
}
