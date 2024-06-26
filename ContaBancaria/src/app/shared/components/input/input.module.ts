import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailInputComponent } from './email-input/email-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    EmailInputComponent,
    PasswordInputComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
   exports: [ 
    EmailInputComponent,
    PasswordInputComponent,
    SearchInputComponent]
})
export class InputModule { }
