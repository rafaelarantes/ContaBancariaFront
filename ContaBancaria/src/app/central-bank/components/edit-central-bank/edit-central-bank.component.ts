import { Component } from '@angular/core';

import { TitleService } from '../../../shared/services/title/title.service';
import { BaseComponent } from '../../../shared/components/base/base.component';

@Component({
  selector: 'app-edit-central-bank',
  standalone: true,
  imports: [],
  templateUrl: './edit-central-bank.component.html',
  styleUrl: './edit-central-bank.component.scss'
})
export class EditCentralBankComponent extends BaseComponent {
  constructor(titleService: TitleService
  ) {
    super();
    titleService.setTitle('');
  }
}
