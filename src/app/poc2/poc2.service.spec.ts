import { TestBed } from '@angular/core/testing';

import { Poc2Service } from './poc2.service';

describe('Poc2Service', () => {
  let service: Poc2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Poc2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
