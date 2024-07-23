import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TituloService } from './shared/services/titulo/titulo.service';
import { BaseComponent } from './shared/components/base/base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent {
  private readonly TITLE_BANK_ACCOUNT = 'TITLE_BANK_ACCOUNT'
  
  constructor(private tituloService: TituloService) {
    super();
    this.translateService.setDefaultLang('en-US'); 

    this.getTranslatedText(this.TITLE_BANK_ACCOUNT).subscribe(title => {
      this.tituloService.setTitulo(title, false);
    });
  }
}
