import { TestBed } from '@angular/core/testing';

import { HoardService } from './hoard.service';

describe('HoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoardService = TestBed.get(HoardService);
    expect(service).toBeTruthy();
  });
});
