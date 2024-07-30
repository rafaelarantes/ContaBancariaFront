import { Component } from '@angular/core';

import { FilterSearchServiceService } from '../services/filter-search-service.service';
import { BaseComponent } from '../../../base/base.component';
import { TranslationKeys } from '../../../../services/translation/translation-keys.enum';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent extends BaseComponent {
  search: string = '';
  placeholder = '';

  constructor(private filterSearchServiceService: FilterSearchServiceService) {
    super();
    this.placeholder = this.getTranslatedText(TranslationKeys.SHARED_INPUT_SEARCH_PLACEHOLDER);
  }

  filter() {
    this.filterSearchServiceService.setSearch(this.search);
  }
}
