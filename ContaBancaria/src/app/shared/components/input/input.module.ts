import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { TranslateModule } from '@ngx-translate/core';

import { EmailInputComponent } from './email-input/email-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { SearchInputComponent } from './search-input/component/search-input.component';


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
    MatIconModule,
    MatButtonModule,
    TranslateModule
  ],
   exports: [ 
    EmailInputComponent,
    PasswordInputComponent,
    SearchInputComponent]
})
export class InputModule { }
