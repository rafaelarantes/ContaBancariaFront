import { Component, TRANSLATIONS } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TituloService } from './shared/services/titulo/titulo.service';
import { BaseComponent } from './shared/components/base/base.component';
import { TranslationKeys } from './shared/services/translation/translation-keys.enum';
import { Languages } from './shared/services/translation/languages.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent {
  constructor(private tituloService: TituloService) {
    super();

    this.translationService.setLanguage(Languages.enUS);
    let title = this.getTranslatedText(TranslationKeys.TITLE_BANK_ACCOUNT);
    this.tituloService.setTitulo(title, false);
  }
}
