import { TestBed } from '@angular/core/testing';

import { IaPage1Service } from './ia-page1.service';

describe('IaPage1Service', () => {
  let service: IaPage1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaPage1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
