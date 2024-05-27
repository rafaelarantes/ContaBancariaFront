import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TableComponent } from '../../../shared/components/table/table.component';
import { BancoCentralService } from '../../banco-central.service';
import { TituloService } from '../../../shared/services/titulo/titulo.service';
import { AutenticacaoService } from '../../../autenticacao/autenticacao.service';
import { BaseComponent } from '../../../shared/components/base/base.component';

@Component({
  selector: 'app-listar-banco-central',
  standalone: true,
  imports: [ TableComponent],
  templateUrl: './listar-banco-central.component.html',
  styleUrl: './listar-banco-central.component.scss',
})
export class ListarBancoCentralComponent extends BaseComponent implements AfterViewInit {
  @ViewChild(TableComponent) tableComponent: TableComponent = <TableComponent>{};
  returnUrl: string = '/';

  constructor(private route: ActivatedRoute,
              private bancoCentralService: BancoCentralService,
              private snackBar: MatSnackBar,
              private tituloService: TituloService,
              private autenticacaoService: AutenticacaoService) {
    super();
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    tituloService.setTitulo('Banco Central');
  }

  async ngAfterViewInit() {
    let columns = new Map<string, string>();
    columns.set('nome', 'Nome');
    columns.set('agencia', 'Agência');
    columns.set('numero', 'Número');
    this.tableComponent.setColumns = columns;

    this.bancoCentralService
      .listagem()
      .then((data) => {
        this.tableComponent.setData = data;
      })
      .catch((error) => {
        this.snackBar.open('Falha ao listar bancos', 'Erro interno.', {
          duration: 3000
        });

        if(error.status === 401){
          this.autenticacaoService.deslogar();
          window.location.reload();
        }
      });
  }
}