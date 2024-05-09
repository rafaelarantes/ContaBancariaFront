import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AutenticacaoService } from './autenticacao.service';

export const naoAutenticadoGuard: CanActivateFn = (route, state) => {
  const autenticacaoService = inject(AutenticacaoService);

  if (autenticacaoService.logado) {
    inject(Router).createUrlTree(['']);

    return false;
  }
  
  return true;
};