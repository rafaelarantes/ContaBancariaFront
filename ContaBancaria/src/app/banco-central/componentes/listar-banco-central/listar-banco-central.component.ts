import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { TableComponent } from '../../../shared/components/table/table.component';
import { ITable } from '../../../shared/components/table/itable';

@Component({
  selector: 'app-listar-banco-central',
  standalone: true,
  imports: [ TableComponent],
  templateUrl: './listar-banco-central.component.html',
  styleUrl: './listar-banco-central.component.scss',
})
export class ListarBancoCentralComponent implements AfterViewInit {
  
  @ViewChild(TableComponent) tableComponent: TableComponent = <TableComponent>{};

  constructor() {
  }

  ngAfterViewInit() {
    let columns = new Map<string, string>();
    columns.set('nome', 'Nome');
    columns.set('agencia', 'Agência');
    columns.set('numero', 'Número');
    this.tableComponent.setColumns = columns;

    this.tableComponent.setData = ELEMENT_DATA;
  }
}

export interface BancoCentral extends ITable {
  guid: string;
  nome: string;
  agencia: number;
  numero: number;
}

const ELEMENT_DATA: BancoCentral[] = [
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666233 },
  { guid: 'cefa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasila', agencia: 25585, numero: 666232 },
  { guid: 'defa28a6-77a3-4f4f-a6b7-ace109746e9e', nome: 'Banco do Brasile', agencia: 25586, numero: 666666 }
];
