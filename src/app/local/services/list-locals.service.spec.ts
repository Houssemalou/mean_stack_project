import { TestBed } from '@angular/core/testing';

import { ListLocalsService } from './list-locals.service';

describe('ListLocalsService', () => {
  let service: ListLocalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListLocalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
