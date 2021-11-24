import { TestBed } from '@angular/core/testing';

import { CaseWorkerGuard } from './case-worker.guard';

describe('CaseWorkerGuard', () => {
  let guard: CaseWorkerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CaseWorkerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
