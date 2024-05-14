import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-listar-banco-central',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './listar-banco-central.component.html',
  styleUrl: './listar-banco-central.component.scss'
})
export class ListarBancoCentralComponent implements AfterViewInit {
  displayedColumns: string[] = ['Nome', 'Agencia', 'Numero'];
  dataSource = new MatTableDataSource<BancoCentral>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};
  @ViewChild(MatSort) sort = new MatSort();

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = "Bancos por página:";
    this.paginator._intl.firstPageLabel = "Primeira página";
    this.paginator._intl.lastPageLabel = "Última página";
    this.paginator._intl.nextPageLabel = "Próxima página";
    this.paginator._intl.previousPageLabel= "Página anterior";

    // this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    //   return `${page} - ${ pageSize * page } de ${length}`;
    // };

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      // This example uses English messages. If your application supports
      // multiple language, you would internationalize these strings.
      // Furthermore, you can customize the message to add additional
      // details about the values being sorted.
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }  
}

export interface BancoCentral {
  Guid: string;
  Nome: string;
  Agencia: number;
  Numero: number;
}

const ELEMENT_DATA: BancoCentral[] = [
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 },
  { Guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', Nome: 'Banco do Brasil', Agencia: 25585, Numero: 666232 }
];
