import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IUsuario } from '../../interfaces/iusuario';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { CardModule } from '../../../shared/components/card/card.module';
import { InputModule } from '../../../shared/components/input/input.module'
import { ButtonModule } from '../../../shared/components/button/button.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, CardModule, InputModule, ButtonModule, TranslateModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends BaseComponent {
  
  formLogin: FormGroup;
  tituloCard = 'Login';

  constructor(private formBuilder: FormBuilder){
    super();
    
    this.formLogin = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login(){
      if(this.formLogin.valid) {
        var usuario = this.formLogin.getRawValue() as IUsuario;
        let retorno = this.autenticacaoService.logar(usuario);
  
        this.processReturn(retorno);
      }
    }
  }
