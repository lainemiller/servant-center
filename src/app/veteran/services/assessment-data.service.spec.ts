import { TestBed } from '@angular/core/testing';

import { AssessmentDataService } from './assessment-data.service';

describe('AssessmentDataService', () => {
  let service: AssessmentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
