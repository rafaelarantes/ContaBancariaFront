import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BaseComponent } from '../../../shared/components/base/base.component';

@Component({
  selector: 'app-central-bank',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './central-bank.component.html',
  styleUrl: './central-bank.component.scss'
})
export class CentralBankComponent extends BaseComponent {

}
