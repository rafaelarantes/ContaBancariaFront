import { inject, Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslationService } from '../../../services/translation/translation.service';
import { TranslationKeys } from '../../../services/translation/translation-keys.enum';

@Injectable()
export class PtBrMatPaginatorIntl extends MatPaginatorIntl {
  ofLabel: string = '';

  constructor(translationService: TranslationService) {
    super();
    
    this.itemsPerPageLabel = translationService.getTranslation(TranslationKeys.SHARED_TABLE_PAGINATOR_COUNT_PER_PAGE);  
    this.firstPageLabel = translationService.getTranslation(TranslationKeys.SHARED_TABLE_PAGINATOR_FIRST_PAGE);
    this.lastPageLabel = translationService.getTranslation(TranslationKeys.SHARED_TABLE_PAGINATOR_LAST_PAGE);
    this.nextPageLabel = translationService.getTranslation(TranslationKeys.SHARED_TABLE_PAGINATOR_NEXT_PAGE);
    this.previousPageLabel= translationService.getTranslation(TranslationKeys.SHARED_TABLE_PAGINATOR_PREVIOUS_PAGE);
    this.ofLabel = translationService.getTranslation(TranslationKeys.SHARED_TABLE_PAGINATOR_OF);

  }

  override getRangeLabel = (page: any, pageSize: any, length: any) => {

    if (length === 0 || pageSize === 0) {
      return `0 ${ this.ofLabel } ` + length;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

    return startIndex + 1 + ' - ' + endIndex + ` ${ this.ofLabel}  ` + length;
  };
}