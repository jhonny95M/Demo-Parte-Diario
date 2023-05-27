import { TestBed } from '@angular/core/testing';

import { TipoReferenciaService } from './tipo-referencia.service';

describe('TipoReferenciaService', () => {
  let service: TipoReferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoReferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
