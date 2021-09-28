import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScDashboardComponent } from './sc-dashboard.component';

describe('ScDashboardComponent', () => {
  let component: ScDashboardComponent;
  let fixture: ComponentFixture<ScDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
