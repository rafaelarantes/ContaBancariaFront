import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { TableComponent } from '../table/component/table.component';
import { ITable } from '../table/interfaces/itable';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [ TableComponent, MatButtonModule, MatIconModule, MatInputModule, FormsModule ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  private columns: Map<string, string> = new Map<string, string>();
  search: string = '';

  @ViewChild(TableComponent) tableComponent: TableComponent = <TableComponent>{};

  set setData(data: ITable[]){
    this.tableComponent.setData = data;
  }

  updateColumns() {
    this.tableComponent.setColumns = this.columns;
  }

  setColumn(name: string, value: string){
    this.columns.set(name, value);
  }

  filter() {
    this.tableComponent.filter(this.search);
  }
}
