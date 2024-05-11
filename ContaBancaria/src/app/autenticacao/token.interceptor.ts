import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { environment } from '../../environments/environment.development';
import { AutenticacaoService } from './autenticacao.service';

export const tokenInterceptor: HttpInterceptorFn = 
    (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  
  const autenticacaoService = inject(AutenticacaoService);
  const token = autenticacaoService.tokenUsuario;
  
  const requestUrl: Array<any> = req.url.split('/');
  const apiUrl: Array<any> = environment.apiUrl.split('/');
          
  if (token && requestUrl[2] === apiUrl[2]) {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${ token }`)
    });

    return next(modifiedReq);
  }
  
  return next(req);
};