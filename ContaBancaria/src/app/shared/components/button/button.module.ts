import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { StrokedButtonComponent } from './stroked-button/stroked-button.component';


@NgModule({
  declarations: [StrokedButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [StrokedButtonComponent]
})
export class ButtonModule { }
