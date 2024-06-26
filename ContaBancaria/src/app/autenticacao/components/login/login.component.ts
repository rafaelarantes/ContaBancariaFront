import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { IUsuario } from '../../interfaces/iusuario';
import { SharedModule } from '../../../shared/shared.module';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { InputModule } from '../../../shared/components/input/input.module'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, SharedModule, InputModule ],
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

  logar(){
      if(this.formLogin.valid) {
        var usuario = this.formLogin.getRawValue() as IUsuario;
        let retorno = this.autenticacaoService.logar(usuario);
  
        this.processReturn(retorno);
      }
    }
  }
