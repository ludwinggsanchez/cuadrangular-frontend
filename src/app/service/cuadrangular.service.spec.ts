import { TestBed } from '@angular/core/testing';

import { CuadrangularService } from './cuadrangular.service';

describe('CuadrangularService', () => {
  let service: CuadrangularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuadrangularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
