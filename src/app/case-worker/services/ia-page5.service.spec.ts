import { TestBed } from '@angular/core/testing';

import { IaPage5Service } from './ia-page5.service';

describe('IaPage5Service', () => {
  let service: IaPage5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaPage5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
