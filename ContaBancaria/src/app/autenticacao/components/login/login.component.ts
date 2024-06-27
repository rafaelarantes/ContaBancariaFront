import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { IUsuario } from '../../interfaces/iusuario';
import { SharedModule } from '../../../shared/shared.module';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { InputModule } from '../../../shared/components/input/input.module'
import { ButtonModule } from '../../../shared/components/button/button.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, MatCardModule, SharedModule, InputModule, ButtonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
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
