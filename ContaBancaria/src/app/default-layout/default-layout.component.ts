import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [ RouterOutlet, MatButtonModule, MatIconModule, MatToolbarModule ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  titulo = '';

  constructor(private autenticacaoService: AutenticacaoService) { }

  deslogar(){
    this.autenticacaoService.deslogar();
  }

}
