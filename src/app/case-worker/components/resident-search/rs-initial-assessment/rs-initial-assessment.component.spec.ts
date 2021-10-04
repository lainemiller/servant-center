import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsInitialAssessmentComponent } from './rs-initial-assessment.component';

describe('RsInitialAssessmentComponent', () => {
  let component: RsInitialAssessmentComponent;
  let fixture: ComponentFixture<RsInitialAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RsInitialAssessmentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsInitialAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
