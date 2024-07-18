import { TestBed } from '@angular/core/testing';

import { FilterSearchServiceService } from './filter-search-service.service';

describe('FilterSearchServiceService', () => {
  let service: FilterSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
