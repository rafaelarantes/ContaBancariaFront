import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { CentralBankService } from '../../services/central-bank.service';
import { TitleService } from '../../../shared/services/title/title.service';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { ListingComponent } from '../../../shared/components/listing/listing.component';
import { TranslationKeys } from '../../../shared/services/translation/translation-keys.enum';

@Component({
  selector: 'app-list-central-bank',
  standalone: true,
  imports: [ ListingComponent ],
  templateUrl: './list-central-bank.component.html',
  styleUrl: './list-central-bank.component.scss'
})
export class ListCentralBankComponent extends BaseComponent implements AfterViewInit {
  @ViewChild(ListingComponent) listingComponent: ListingComponent = <ListingComponent>{};

  constructor(private centralBankService: CentralBankService,
              private titleService: TitleService) {
    super();

    titleService.setTitle(this.getTranslatedText(TranslationKeys.CENTRAL_BANK_TITLE));
  }

  async ngAfterViewInit() {

    this.listingComponent.setColumn('description',this.getTranslatedText(TranslationKeys.CENTRAL_BANK_LISTING_NAME));
    this.listingComponent.setColumn('agencia', this.getTranslatedText(TranslationKeys.CENTRAL_BANK_LISTING_BRANCH));
    this.listingComponent.updateColumns();

    let returno = this.centralBankService.listing();
    this.processReturn(returno, 'nome', (data) => {
      data.data.map((banco: {  numero: string; description: string; }) => {
        banco.numero = banco.numero.toString().padStart(3, '0');
        banco.description =  `${banco.numero} - ${banco.description}`;
      });

      this.listingComponent.setData = data.data
    });
  }
}
