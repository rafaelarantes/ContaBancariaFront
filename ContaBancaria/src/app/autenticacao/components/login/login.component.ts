import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

import { AutenticacaoService } from '../../autenticacao.service';
import { IUsuario } from '../../interfaces/iusuario';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, SharedModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup;
  titulo = 'Login';

  constructor(private formBuilder: FormBuilder,
              private autenticacaoService: AutenticacaoService,
              private snackBar: MatSnackBar
  ){
    this.formLogin = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.criarForm();
  }
  
  criarForm(){
    this.formLogin = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Senha: ['', [Validators.required]]
    });
  }

  logar(){
    if(this.formLogin.invalid) return;
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
