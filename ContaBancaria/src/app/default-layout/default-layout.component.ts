import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [ RouterOutlet, MatButtonModule, MatIconModule ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  constructor(private autenticacaoService: AutenticacaoService) { }

  deslogar(){
    this.autenticacaoService.deslogar();
  }

}
