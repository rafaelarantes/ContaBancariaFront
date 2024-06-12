import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { BancoCentralService } from '../../services/banco-central.service';
import { TituloService } from '../../../shared/services/titulo/titulo.service';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { ListingComponent } from '../../../shared/components/listing/listing.component';

@Component({
  selector: 'app-listar-banco-central',
  standalone: true,
  imports: [ ListingComponent ],
  templateUrl: './listar-banco-central.component.html',
  styleUrl: './listar-banco-central.component.scss',
})
export class ListarBancoCentralComponent extends BaseComponent implements AfterViewInit {

  @ViewChild(ListingComponent) listingComponent: ListingComponent = <ListingComponent>{};

  constructor(private bancoCentralService: BancoCentralService,
              private tituloService: TituloService) {
    super();
    tituloService.setTitulo('Banco Central');
  }

  async ngAfterViewInit() {
    this.listingComponent.setColumn('description', 'Nome');
    this.listingComponent.setColumn('numero', 'Número');
    this.listingComponent.setColumn('agencia', 'Agência');
    this.listingComponent.updateColumns();

    let returno = this.bancoCentralService.listagem();
    this.processReturn(returno, 'nome', (data) => {
      this.listingComponent.setData = data.data
    });
  }
}