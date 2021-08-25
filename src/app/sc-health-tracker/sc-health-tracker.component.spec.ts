import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScHealthTrackerComponent } from './sc-health-tracker.component';

describe('ScHealthTrackerComponent', () => {
  let component: ScHealthTrackerComponent;
  let fixture: ComponentFixture<ScHealthTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScHealthTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScHealthTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
