import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

import { EmailInputComponent } from './email-input/email-input.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { SearchInputComponent } from './search-input/component/search-input.component';
import { NameInputComponent } from './name-input/name-input.component';
import { BranchInputComponent } from './branch-input/branch-input.component';

@NgModule({
  declarations: [
    EmailInputComponent,
    PasswordInputComponent,
    SearchInputComponent,
    NameInputComponent,
    BranchInputComponent
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
    NameInputComponent,
    BranchInputComponent]
})
export class InputModule { }
