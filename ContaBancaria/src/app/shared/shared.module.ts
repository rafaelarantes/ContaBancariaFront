import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './components/card/card.component';
import { RequestService } from './services/request/request.service';
import { TituloService } from './services/titulo/titulo.service';

@NgModule({
  declarations: [ CardComponent ],
  imports: [
    CommonModule
  ],
  exports: [ CardComponent ],
  providers: [ RequestService, TituloService ]
})
export class SharedModule { }
