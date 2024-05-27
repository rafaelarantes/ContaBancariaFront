import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { TituloService } from './shared/services/titulo/titulo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private tituloService: TituloService) {
    this.tituloService.setTitulo('Conta Bancária', false);
  }
}
