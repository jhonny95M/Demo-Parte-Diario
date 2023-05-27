import { TestBed } from '@angular/core/testing';

import { OrdenParteService } from './orden-parte.service';

describe('OrdenParteService', () => {
  let service: OrdenParteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenParteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
