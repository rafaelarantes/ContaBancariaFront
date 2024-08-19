import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthenticationService } from '../services/authentication.service';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const authenticationService = inject(AuthenticationService);
  
  if (authenticationService.loggedIn) {
    return true;
  }

  inject(Router).navigate(['/login']);
  return false;
};

