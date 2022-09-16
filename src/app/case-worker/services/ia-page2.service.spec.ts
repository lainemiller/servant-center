import { TestBed } from '@angular/core/testing';

import { IaPage2Service } from './ia-page2.service';

describe('IaPage2Service', () => {
  let service: IaPage2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IaPage2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
