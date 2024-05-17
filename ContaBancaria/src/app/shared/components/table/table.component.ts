import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { PtBrMatPaginatorIntl } from './pt-br-mat-paginator-intl';
import { IAction } from './iaction';
import { ITable } from './itable'

@Component({
  selector: 'app-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers:  [{
    provide: MatPaginatorIntl, 
    useClass: PtBrMatPaginatorIntl
  }]
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) private paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) private sort = new MatSort();

  private dataSource = new MatTableDataSource<ITable>([]);
  private columns: Map<string, string> = new Map<string, string>();
  private actions: Map<string, IAction> = new Map<string, IAction>();
  readonly ADD: string = 'add';
  readonly DELETE: string = 'delete';
  readonly OPTIONS: string = 'options';

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.actions.set(this.ADD, { enabled: true });
    this.actions.set(this.DELETE, { enabled: true });
  }

  async ngAfterViewInit() {
    this.paginator.hidePageSize = true;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  set setData(data: ITable[]){
    if(this.hasActions){
      data.forEach((table: ITable) => table.options = '');
    }

    this.dataSource.data = data;
  }

  get getDataSource() {
    return Object.assign(this.dataSource);
  }

  set setColumns(columns: Map<string, string>){
    this.columns = columns;

    if(this.hasActions){
      this.columns.set(this.OPTIONS, 'Opções');
    }
  }

  get getDisplayedColumns() {
    return Array.from(this.columns.keys());
  }

  get getColumns(){
    return new Map(this.columns);
  }

  disableAdd() {
    let addAction = this.actions.get(this.ADD)!;
    addAction.enabled = false;

    this.actions.set(this.ADD, addAction);
  }

  disableDelete() {
    let addAction = this.actions.get(this.DELETE)!;
    addAction.enabled = false;

    this.actions.set(this.DELETE, addAction);
  }

  get hasActions() : boolean {
    return this.actionEnabled(this.ADD) || this.actionEnabled(this.DELETE);
  }

  actionEnabled(action: string): boolean {
    if(!action) return false;

    return this.actions.get(action)?.enabled ? true : false;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}