import { TestBed, inject } from '@angular/core/testing';

import { MemorialsService } from './memorials.service';

describe('MemorialsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemorialsService]
    });
  });

  it('should be created', inject([MemorialsService], (service: MemorialsService) => {
    expect(service).toBeTruthy();
  }));
});
