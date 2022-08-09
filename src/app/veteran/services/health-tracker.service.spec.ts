import { TestBed } from '@angular/core/testing';

import { HealthTrackerService } from './health-tracker.service';

describe('HealthTrackerService', () => {
  let service: HealthTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
