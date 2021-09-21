import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsWeeklyProgressNotesComponent } from './rs-weekly-progress-notes.component';

describe('RsWeeklyProgressNotesComponent', () => {
  let component: RsWeeklyProgressNotesComponent;
  let fixture: ComponentFixture<RsWeeklyProgressNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsWeeklyProgressNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsWeeklyProgressNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
