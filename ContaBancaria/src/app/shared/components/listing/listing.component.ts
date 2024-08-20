import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { TableComponent } from '../table/component/table.component';
import { ITable } from '../table/interfaces/itable';
import { InputModule } from '../input/input.module';
import { FilterSearchServiceService } from '../input/search-input/services/filter-search-service.service';
import { BaseComponent } from '../base/base.component';
import { TranslationKeys } from '../../services/translation/translation-keys.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [ TableComponent, MatButtonModule, MatIconModule, MatInputModule, FormsModule, InputModule ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent extends BaseComponent {
  newLabel = '';

  private columns: Map<string, string> = new Map<string, string>();

  @ViewChild(TableComponent) tableComponent: TableComponent = <TableComponent>{};

  constructor(private filterSearchServiceService: FilterSearchServiceService,
              private router: Router
  ) {
    super();

    this.newLabel = this.getTranslatedText(TranslationKeys.SHARED_LISTING_ADD_LABEL);
    
    filterSearchServiceService.filter$.subscribe(search => {
      this.tableComponent.filter(search);
    });
  }

  set setData(data: ITable[]){
    this.tableComponent.setData = data;
  }

  updateColumns() {
    this.tableComponent.setColumns = this.columns;
  }

  setColumn(name: string, value: string){
    this.columns.set(name, value);
  }

  create() {
    this.router.navigate([`${ this.router.url }/create`]);
  }
}
