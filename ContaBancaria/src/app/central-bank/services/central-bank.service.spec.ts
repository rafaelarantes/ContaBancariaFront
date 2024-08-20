import { TestBed } from '@angular/core/testing';

import { CentralBankService } from './central-bank.service';

describe('CentralBankService', () => {
  let service: CentralBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentralBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
