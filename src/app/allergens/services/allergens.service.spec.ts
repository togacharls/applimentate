import { TestBed } from '@angular/core/testing';

import { AllergensService } from './allergens.service';

describe('AllergensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllergensService = TestBed.get(AllergensService);
    expect(service).toBeTruthy();
  });
});
