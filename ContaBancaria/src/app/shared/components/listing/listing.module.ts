import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingComponent } from './listing.component';
import { ITable } from '../table/interfaces/itable';

@NgModule({
  declarations: [ ListingComponent ],
  imports: [
    CommonModule
  ],
  exports: [ ListingComponent ]
})
export class ListingModule {
 }
