import { TestBed } from '@angular/core/testing';

import { BancoCentralServiceService } from './banco-central-service.service';

describe('BancoCentralServiceService', () => {
  let service: BancoCentralServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoCentralServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
