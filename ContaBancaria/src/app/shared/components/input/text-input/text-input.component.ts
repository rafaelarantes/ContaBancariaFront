import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { BaseComponent } from '../../base/base.component';
import { TranslationKeys } from '../../../services/translation/translation-keys.enum';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    }
  ],
})
export class TextInputComponent extends BaseComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  
  private requiredMessage = '';
  
  onTouched: () => void = () => {};

  control = new FormControl('', [Validators.required]);

  constructor() {
    super();

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
