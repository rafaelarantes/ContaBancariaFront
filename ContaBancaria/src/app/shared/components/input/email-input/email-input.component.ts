import { Component, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

import { BaseComponent } from '../../base/base.component';
import { TranslationKeys } from '../../../services/translation/translation-keys.enum';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]
})
export class EmailInputComponent extends BaseComponent implements ControlValueAccessor, Validator {
  label = '';
  placeholder = '';
  private requiredMessage = ''
  private invalidaEmailMessage = '';

  control = new FormControl('email', [Validators.required, Validators.email]);
  
  onChange = (value: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};

  constructor() {
    super();

    this.label = this.getTranslatedText(TranslationKeys.SHARED_INPUT_EMAIL_LABEL_EMAIL);
    this.placeholder = this.getTranslatedText(TranslationKeys.SHARED_INPUT_EMAIL_PLACEHOLDER_EMAIL);
    this.requiredMessage = this.getTranslatedText(TranslationKeys.REQUIRED);
    this.invalidaEmailMessage = this.getTranslatedText(TranslationKeys.SHARED_INPUT_EMAIL_INVALID_EMAIL);
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

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.control.valid ? null : { email: { valid: false } };
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
  
  getErrorMessage() : string {
    if (this.control.hasError('required')) {
      return this.requiredMessage;
    } else if (this.control.hasError('email')) {
      return this.invalidaEmailMessage ;
    }
    
    return '';
  }
}