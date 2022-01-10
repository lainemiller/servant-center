import { TestBed } from '@angular/core/testing';

import { VeteranGuard } from './veteran.guard';

describe('VeteranGuard', () => {
  let guard: VeteranGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VeteranGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
