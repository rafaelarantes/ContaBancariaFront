import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private autenticacaoService: AutenticacaoService,
              private router: Router){}

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

  acessar(acesso: string){
    this.router.navigate([`/${ acesso }`]);
  } 

  get possuiPermissao() : boolean {
    return this.estaAutorizado('Adm') ||
           this.estaAutorizado('Banco') ||
           this.estaAutorizado('Conta')  ||
           this.estaAutorizado('BancoCentral') ? true : false;
  }
}
