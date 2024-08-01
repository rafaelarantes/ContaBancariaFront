import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Location, NgClass } from '@angular/common';
import { HostListener } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AutenticacaoService } from '../autenticacao/services/autenticacao.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleService } from '../shared/services/title/title.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-default-layout',
  standalone: true,
  imports: [ RouterOutlet, MatButtonModule, MatIconModule, MatToolbarModule, NgClass ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  title = '';

  constructor(private autenticacaoService: AutenticacaoService,
              private location: Location,
              public titleService: TitleService) {
    this.titleService.title$.subscribe(title => {
      this.title = title;
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
    this.titleService.setTitle('');
  }
}
