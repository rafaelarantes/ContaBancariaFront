import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { BaseComponent } from '../../base/base.component';
import { TranslationKeys } from '../../../services/translation/translation-keys.enum';


@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrl: './name-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true,
    }
  ],
})
export class NameInputComponent extends BaseComponent implements ControlValueAccessor {
  label = '';
  placeholder = '';
  private requiredMessage = '';
  
  onTouched: () => void = () => {};

  control = new FormControl('', [Validators.required]);
  constructor() {
    super();

    this.label = this.getTranslatedText(TranslationKeys.SHARED_INPUT_NAME_LABEL_NAME);
    this.placeholder = this.getTranslatedText(TranslationKeys.SHARED_INPUT_NAME_PLACEHOLDER_NAME);
    this.requiredMessage = this.getTranslatedText(TranslationKeys.REQUIRED);
  }
  writeValue(value: any): void {
    this.control.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  getErrorMessage() : string {
    if (this.control.hasError('required')) {
      return this.requiredMessage;
    } 

    return '';
  }
}
