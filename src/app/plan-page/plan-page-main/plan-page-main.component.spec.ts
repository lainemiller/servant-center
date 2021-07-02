import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPageMainComponent } from './plan-page-main.component';

describe('PlanPageMainComponent', () => {
  let component: PlanPageMainComponent;
  let fixture: ComponentFixture<PlanPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanPageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
