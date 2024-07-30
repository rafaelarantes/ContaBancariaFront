import { Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { BaseComponent } from '../../base/base.component';
import { TranslationKeys } from '../../../services/translation/translation-keys.enum';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent extends BaseComponent implements ControlValueAccessor, Validator {
  label = '';
  private requiredMessage = ''

  constructor() {
    super();

    this.requiredMessage = this.getTranslatedText(TranslationKeys.REQUIRED);
    this.label = this.getTranslatedText(TranslationKeys.SHARED_INPUT_PASSWORD);
  }
  
  control = new FormControl('password', [ Validators.required ]);
  
  hide = true;

  onChange = (value: any) => {};
  onTouched = () => {};
  onValidatorChange = () => {};

  writeValue(value: any): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.control.valid ? null : { password: { valid: false } };

  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  getErrorMessage(): string {
    if (this.control.hasError('required')) {
      return this.requiredMessage;
    }

    return '';
  }

  showPassword() {
    this.hide = false;
  }

  hidePassword() {
    this.hide = true;
  }
}
