import { TestBed } from '@angular/core/testing';

import { DaterangepickerService } from './daterangepicker.service';

describe('DaterangepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaterangepickerService = TestBed.get(DaterangepickerService);
    expect(service).toBeTruthy();
  });
});
