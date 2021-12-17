import { TestBed } from '@angular/core/testing';

import { ClipBoardService } from './clip-board.service';

describe('ClipBoardService', () => {
  let service: ClipBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClipBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
