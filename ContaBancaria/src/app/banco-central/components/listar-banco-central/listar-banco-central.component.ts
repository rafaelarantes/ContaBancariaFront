import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import { TableComponent } from '../../../shared/components/table/component/table.component';
import { BancoCentralService } from '../../services/banco-central.service';
import { TituloService } from '../../../shared/services/titulo/titulo.service';
import { BaseComponent } from '../../../shared/components/base/base.component';

@Component({
  selector: 'app-listar-banco-central',
  standalone: true,
  imports: [ TableComponent, MatButtonModule, MatIconModule, MatInputModule ],
  templateUrl: './listar-banco-central.component.html',
  styleUrl: './listar-banco-central.component.scss',
})
export class ListarBancoCentralComponent extends BaseComponent implements AfterViewInit {
  @ViewChild(TableComponent) tableComponent: TableComponent = <TableComponent>{};

  constructor(private bancoCentralService: BancoCentralService,
              private tituloService: TituloService) {
    super();
    tituloService.setTitulo('Banco Central');
  }

  async ngAfterViewInit() {
    let columns = new Map<string, string>();

    columns.set('nome', 'Nome');
    columns.set('agencia', 'Agência');
    columns.set('numero', 'Número');
    
    this.tableComponent.setColumns = columns;

    let returno = this.bancoCentralService.listagem();
    this.processReturn(returno, (data) => this.tableComponent.setData = data.data);
  }
}