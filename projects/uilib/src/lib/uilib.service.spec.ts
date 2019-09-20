import { TestBed } from '@angular/core/testing';

import { UilibService } from './uilib.service';

describe('UilibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UilibService = TestBed.get(UilibService);
    expect(service).toBeTruthy();
  });
});
