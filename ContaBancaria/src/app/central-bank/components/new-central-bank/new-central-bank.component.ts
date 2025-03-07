import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BaseComponent } from '../../../shared/components/base/base.component';
import { InputModule } from '../../../shared/components/input/input.module'
import { TitleService } from '../../../shared/services/title/title.service';
import { TranslationKeys } from '../../../shared/services/translation/translation-keys.enum';

@Component({
  selector: 'app-new-central-bank',
  standalone: true,
  imports: [InputModule, ReactiveFormsModule],
  templateUrl: './new-central-bank.component.html',
  styleUrl: './new-central-bank.component.scss'
})
export class NewCentralBankComponent extends BaseComponent {
  formNewCentralBank: FormGroup;

  labelName = '';
  placeholderName = '';

  labelBranch = '';
  placeholderBranch = '';

  labelBankNumber = '';
  placeholderBankNumber = '';

  constructor(private formBuilder: FormBuilder,
              private titleService: TitleService
  ){
    super();

    titleService.setTitle(this.getTranslatedText(TranslationKeys.CENTRAL_BANK_NEW_TITLE));

    this.formNewCentralBank = this.formBuilder.group({
      name: [''],
      branch: [''],
      bankNumber: ['']
    });

    this.labelName = this.getTranslatedText(TranslationKeys.SHARED_INPUT_NAME_LABEL_NAME);
    this.placeholderName = this.getTranslatedText(TranslationKeys.SHARED_INPUT_NAME_PLACEHOLDER_NAME);

    this.labelBranch = this.getTranslatedText(TranslationKeys.SHARED_INPUT_BRANCH_LABEL_NAME);
    this.placeholderBranch = this.getTranslatedText(TranslationKeys.SHARED_INPUT_BRANCH_PLACEHOLDER_NAME);

    this.labelBankNumber = this.getTranslatedText(TranslationKeys.SHARED_INPUT_BANK_NUMBER_LABEL_NAME);
    this.placeholderBankNumber = this.getTranslatedText(TranslationKeys.SHARED_INPUT_BANK_NUMBER_PLACEHOLDER_NAME);
  }
}
