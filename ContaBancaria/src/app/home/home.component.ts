import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatButtonModule, SharedModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  titulo = "Acesse";

  constructor(private autenticacaoService: AutenticacaoService){}

  estaAutorizado(autorizacao: string): boolean {
    if(!autorizacao){
      return false;
    }

    if(this.autenticacaoService.autorizacao === 'Adm' || 
       (autorizacao == 'Banco' && this.autenticacaoService.autorizacao === 'Banco') || 
       (autorizacao == 'Conta' && this.autenticacaoService.autorizacao === 'Conta') ||
       (autorizacao == 'BancoCentral' && this.autenticacaoService.autorizacao === 'BancoCentral')) {
      return true;
    }

    return false;
  }

  get possuiPermissao() : boolean {
    return this.estaAutorizado('Adm') ||
           this.estaAutorizado('Banco') ||
           this.estaAutorizado('Conta')  ||
           this.estaAutorizado('BancoCentral') ? true : false;
  }
}
