import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AutenticacaoService } from './autenticacao.service';

export const autenticadoGuard: CanActivateFn = (route, state) => {
  const autenticacaoService = inject(AutenticacaoService);
  
  if (autenticacaoService.logado) {
    return true;
  }

  inject(Router).createUrlTree(['/login']);
  return false;
};

