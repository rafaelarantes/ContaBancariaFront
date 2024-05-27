import { Component } from '@angular/core';

import { TituloService } from '../../../shared/services/titulo/titulo.service';
import { BaseComponent } from '../../../shared/components/base/base.component'

@Component({
  selector: 'app-criar-banco-central',
  standalone: true,
  imports: [],
  templateUrl: './criar-banco-central.component.html',
  styleUrl: './criar-banco-central.component.scss'
})
export class CriarBancoCentralComponent extends BaseComponent {
  constructor(tituloService: TituloService
  ) {
    super();
    tituloService.setTitulo('');

  }
}
