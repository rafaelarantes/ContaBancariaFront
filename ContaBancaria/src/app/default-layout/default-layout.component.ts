import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { HostListener } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AutenticacaoService } from '../autenticacao/services/autenticacao.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TituloService } from '../shared/services/titulo/titulo.service';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [ RouterOutlet, MatButtonModule, MatIconModule, MatToolbarModule ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  titulo = '';

  constructor(private autenticacaoService: AutenticacaoService,
              private location: Location,
              public tituloService: TituloService) {
    this.tituloService.titulo$.subscribe(titulo => {
      this.titulo = titulo;
    });
  }

  deslogar(){
    this.limparSessao();
    this.autenticacaoService.deslogar();
  }

  voltar() {
    this.limparSessao();
    this.location.back();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.limparSessao();
  }

  get path(){
    return this.location.path();
  }

  limparSessao() {
    this.tituloService.setTitulo('');
  }
}
