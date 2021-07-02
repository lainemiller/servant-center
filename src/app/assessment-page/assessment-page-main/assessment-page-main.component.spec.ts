import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentPageMainComponent } from './assessment-page-main.component';

describe('AssessmentPageMainComponent', () => {
  let component: AssessmentPageMainComponent;
  let fixture: ComponentFixture<AssessmentPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentPageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
