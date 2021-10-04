import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScDashboardWidgetComponent } from './sc-dashboard-widget.component';

describe('ScDashboardWidgetComponent', () => {
  let component: ScDashboardWidgetComponent;
  let fixture: ComponentFixture<ScDashboardWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScDashboardWidgetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScDashboardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
