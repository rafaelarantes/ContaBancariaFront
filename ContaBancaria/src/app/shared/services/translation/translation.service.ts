import { Injectable } from '@angular/core';

import { TranslationKeys } from './translation-keys.enum';
import { TRANSLATIONS, TranslationsType } from './translations';
import { Languages } from './languages.enum';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = Languages.enUS;
  private translations = TRANSLATIONS[this.currentLang];

  constructor() {}

  getTranslation(key: TranslationKeys): string {
    return this.translations[key];
  }

  setLanguage(lang: Languages): void {
    this.currentLang = lang;
    this.translations = TRANSLATIONS[this.currentLang];
  }
}