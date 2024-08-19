import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '../interfaces/iuser';
import { RequestService } from '../../shared/services/request/request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient,
              private router: Router,
              private requestService: RequestService) { }

async login(user: IUser) : Promise<any> {
  return new Promise((resolve, reject) => {
    this.requestService.post("autenticacao/login", { Login: user.email, Senha: user.password })
    .then((data) => {
    
      if(!data.resultado) {
        resolve(data);
        return;
      }

      localStorage.setItem('token', data['data']['token']);
      localStorage.setItem('authorization', data['data']['autorizacao']);
  
      this.router.navigate(['']);
  
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
  });
}

logOut() {
  localStorage.clear();
  this.router.navigate(['login']);
}

get authorization(): string {
  return localStorage.getItem('authorization')!;
}

get tokenUser(): string {
  return localStorage.getItem('token')!;
}

get loggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
