import { Component } from '@angular/core';

import { TitleService } from '../../../shared/services/title/title.service';
import { BaseComponent } from '../../../shared/components/base/base.component'

@Component({
  selector: 'app-create-central-bank',
  standalone: true,
  imports: [],
  templateUrl: './create-central-bank.component.html',
  styleUrl: './create-central-bank.component.scss'
})
export class CreateCentralBankComponent extends BaseComponent {
  constructor(titleService: TitleService
  ) {
    super();
    titleService.setTitle('');
  }
}
