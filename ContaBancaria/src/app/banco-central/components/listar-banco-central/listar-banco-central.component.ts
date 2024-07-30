import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { BancoCentralService } from '../../services/banco-central.service';
import { TituloService } from '../../../shared/services/titulo/titulo.service';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { ListingComponent } from '../../../shared/components/listing/listing.component';
import { TranslationKeys } from '../../../shared/services/translation/translation-keys.enum';

@Component({
  selector: 'app-listar-banco-central',
  standalone: true,
  imports: [ ListingComponent ],
  templateUrl: './listar-banco-central.component.html',
  styleUrl: './listar-banco-central.component.scss',
})
export class ListarBancoCentralComponent extends BaseComponent implements AfterViewInit {
  private readonly CENTRAL_BANK_TITLE = 'CENTRAL_BANK_TITLE';
  private readonly CENTRAL_BANK_LISTING_NAME = 'CENTRAL_BANK_LISTING_NAME';
  private readonly CENTRAL_BANK_LISTING_BRANCH = 'CENTRAL_BANK_LISTING_BRANCH';

  @ViewChild(ListingComponent) listingComponent: ListingComponent = <ListingComponent>{};

  constructor(private bancoCentralService: BancoCentralService,
              private tituloService: TituloService) {
    super();

    tituloService.setTitulo(this.getTranslatedText(TranslationKeys.CENTRAL_BANK_TITLE));
  }

  async ngAfterViewInit() {

    this.listingComponent.setColumn('description',this.getTranslatedText(TranslationKeys.CENTRAL_BANK_LISTING_NAME));
    this.listingComponent.setColumn('agencia', this.getTranslatedText(TranslationKeys.CENTRAL_BANK_LISTING_BRANCH));
    this.listingComponent.updateColumns();

    let returno = this.bancoCentralService.listagem();
    this.processReturn(returno, 'nome', (data) => {
      data.data.map((banco: {  numero: string; description: string; }) => {
        banco.numero = banco.numero.toString().padStart(3, '0');
        banco.description =  `${banco.numero} - ${banco.description}`;
      });

      this.listingComponent.setData = data.data
    });
  }
}