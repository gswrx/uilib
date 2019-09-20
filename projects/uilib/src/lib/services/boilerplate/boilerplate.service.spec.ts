import { TestBed } from '@angular/core/testing';

import { BoilerplateService } from './boilerplate.service';

describe('BoilerplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoilerplateService = TestBed.get(BoilerplateService);
    expect(service).toBeTruthy();
  });
});
