import { TestBed } from '@angular/core/testing';

import { VeteranDashboardService } from './veteran-dashboard.service';

describe('VeteranDashboardService', () => {
  let service: VeteranDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeteranDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
