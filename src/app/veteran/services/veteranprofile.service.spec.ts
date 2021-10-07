import { TestBed } from '@angular/core/testing';
import { VeteranprofileService } from './veteranprofile.service';

describe('VeteranprofileService', () => {
  let service: VeteranprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeteranprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
