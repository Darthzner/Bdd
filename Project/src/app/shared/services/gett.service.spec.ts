import { TestBed } from '@angular/core/testing';

import { GettService } from './gett.service';

describe('GettService', () => {
  let service: GettService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
