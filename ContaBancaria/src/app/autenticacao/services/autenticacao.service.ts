import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUsuario } from '../interfaces/iusuario';
import { RequestService } from '../../shared/services/request/request.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient,
              private router: Router,
              private requestService: RequestService) { }

async logar(usuario: IUsuario) : Promise<any> {
  return new Promise((resolve, reject) => {
    this.requestService.post("autenticacao/login", { Login: usuario.email, Senha: usuario.password })
    .then((data) => {
    
      if(!data.resultado) {
        resolve(data);
        return;
      }

      localStorage.setItem('token', data['data']['token']);
      localStorage.setItem('autorizacao', data['data']['autorizacao']);
  
      this.router.navigate(['']);
  
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
  });
}

deslogar() {
  localStorage.clear();
  this.router.navigate(['login']);
}

get autorizacao(): string {
  return localStorage.getItem('autorizacao')!;
}

get tokenUsuario(): string {
  return localStorage.getItem('token')!;
}

get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
