import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TituloService } from './shared/services/titulo/titulo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private tituloService: TituloService,
              private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en-US'); 
    this.tituloService.setTitulo('Conta Bancária', false);
  }
}
