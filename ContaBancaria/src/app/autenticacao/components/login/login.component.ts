import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AutenticacaoService } from '../../autenticacao.service';
import { IUsuario } from '../../interfaces/iusuario';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, MatIconModule, SharedModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup;
  titulo = 'Login';
  hide = true;
  mensagemErro = {
    Email: '',
    Senha: ''
  }

  constructor(private formBuilder: FormBuilder,
              private autenticacaoService: AutenticacaoService,
              private snackBar: MatSnackBar
  ){
    this.formLogin = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Senha: ['', [Validators.required]]
    });
  }

  atualizarMensagemErroEmail() {
    if (this.formLogin.get('Email')?.hasError('required')) {
      this.mensagemErro.Email = 'Obrigatório';
    } else if (this.formLogin.get('Email')?.hasError('email')) {
      this.mensagemErro.Email = 'E-mail inválido';
    } else {
      this.mensagemErro.Email = '';
    }
  }

  atualizarMensagemErroSenha() {
    if (this.formLogin.get('Senha')?.hasError('required')) {
      this.mensagemErro.Senha = 'Obrigatório';
    } else { 
      this.mensagemErro.Senha = '';
    }
  }

  logar(){
    if(this.formLogin.invalid) {
      this.atualizarMensagemErroEmail();
      this.atualizarMensagemErroSenha();
      
      return;
    }
    var usuario = this.formLogin.getRawValue() as IUsuario;
    this.autenticacaoService.logar(usuario).subscribe((response) => {
        if(!response.sucesso){
          this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
            duration: 3000
          });
        }
    })
  }
}
