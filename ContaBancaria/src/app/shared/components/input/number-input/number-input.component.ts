import { Component, forwardRef, Input, input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { BaseComponent } from '../../base/base.component';
import { TranslationKeys } from '../../../services/translation/translation-keys.enum';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
  providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NumberInputComponent),
        multi: true,
      }
  ]
})
export class NumberInputComponent extends BaseComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  
  private requiredMessage = '';
  private numbersOnlyMessage = '';

  onTouched: () => void = () => {};

  control = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  
  constructor() {
    super();
    this.requiredMessage = this.getTranslatedText(TranslationKeys.REQUIRED);
    this.numbersOnlyMessage = this.getTranslatedText(TranslationKeys.NUMBERS_ONLY);
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
    if(this.control.hasError('pattern')){
      return this.numbersOnlyMessage;
    }

    if (this.control.hasError('required')) {
      return this.requiredMessage;
    } 

    return '';
  }
}
