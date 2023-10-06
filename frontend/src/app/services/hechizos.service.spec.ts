import { TestBed } from '@angular/core/testing';

import { HechizosService } from './hechizos.service';

describe('HechizosService', () => {
  let service: HechizosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HechizosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
