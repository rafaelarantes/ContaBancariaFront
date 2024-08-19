import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

export const notAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);

  if (authenticationService.loggedIn) {
    inject(Router).createUrlTree(['']);

    return false;
  }
  
  return true;
};