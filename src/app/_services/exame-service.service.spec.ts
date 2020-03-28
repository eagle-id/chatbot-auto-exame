import { TestBed } from '@angular/core/testing';

import { ExameServiceService } from './exame-service.service';

describe('ExameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExameServiceService = TestBed.get(ExameServiceService);
    expect(service).toBeTruthy();
  });
});
