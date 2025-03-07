import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

import { EmailInputComponent } from './email-input/email-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { SearchInputComponent } from './search-input/component/search-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { NumberInputComponent } from './number-input/number-input.component';

@NgModule({
  declarations: [
    EmailInputComponent,
    PasswordInputComponent,
    SearchInputComponent,
    TextInputComponent,
    NumberInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
   exports: [ 
    EmailInputComponent,
    PasswordInputComponent,
    SearchInputComponent,
    TextInputComponent,
    NumberInputComponent]
})
export class InputModule { }
