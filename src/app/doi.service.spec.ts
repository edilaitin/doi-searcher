import { TestBed } from '@angular/core/testing';

import { DoiService } from './doi.service';

describe('DoiService', () => {
  let service: DoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
