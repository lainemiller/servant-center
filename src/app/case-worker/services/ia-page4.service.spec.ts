import { TestBed } from '@angular/core/testing';

import { IaPage4Service } from './ia-page4.service';

describe('IaPage4Service', () => {
  let service: IaPage4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaPage4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
