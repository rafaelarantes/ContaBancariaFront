import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { naoAutenticadoGuard } from './nao-autenticado.guard';

describe('naoAutenticadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => naoAutenticadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
