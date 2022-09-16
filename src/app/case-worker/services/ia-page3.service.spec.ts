import { TestBed } from '@angular/core/testing';

import { IaPage3Service } from './ia-page3.service';

describe('IaPage3Service', () => {
  let service: IaPage3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaPage3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
