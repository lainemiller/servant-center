import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsTreatmentPlanComponent } from './rs-treatment-plan.component';

describe('RsTreatmentPlanComponent', () => {
  let component: RsTreatmentPlanComponent;
  let fixture: ComponentFixture<RsTreatmentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsTreatmentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsTreatmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
