import { TestBed } from '@angular/core/testing';

import { ProgressNotesService } from './progress-notes.service';

describe('ProgressNotesService', () => {
  let service: ProgressNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
