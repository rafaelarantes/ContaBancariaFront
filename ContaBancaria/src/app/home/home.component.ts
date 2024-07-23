import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CardModule } from '../shared/components/card/card.module';
import { TituloService } from '../shared/services/titulo/titulo.service';
import { BaseComponent } from '../shared/components/base/base.component';
import { ButtonModule } from '../shared/components/button/button.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  CardModule, ButtonModule, TranslateModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent {
  readonly TITLE_BANK_ACCOUNT: string = 'TITLE_BANK_ACCOUNT';
  readonly HOME_CHOOSE_OPTIONS: string = 'HOME_CHOOSE_OPTIONS';
  
  tituloCard = "";

  constructor(private router: Router,
              private tituloService: TituloService){
    super();

    this.getTranslatedsTexts([this.TITLE_BANK_ACCOUNT, this.HOME_CHOOSE_OPTIONS]).subscribe((translated) => {
      this.tituloCard = translated[this.HOME_CHOOSE_OPTIONS];
    });
  }

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
