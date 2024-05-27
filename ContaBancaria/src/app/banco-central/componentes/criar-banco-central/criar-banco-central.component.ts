import { Component } from '@angular/core';

import { TituloService } from '../../../shared/services/titulo/titulo.service';

@Component({
  selector: 'app-criar-banco-central',
  standalone: true,
  imports: [],
  templateUrl: './criar-banco-central.component.html',
  styleUrl: './criar-banco-central.component.scss'
})
export class CriarBancoCentralComponent {
  constructor(tituloService: TituloService
  ) {
    tituloService.setTitulo('');

  }
}
