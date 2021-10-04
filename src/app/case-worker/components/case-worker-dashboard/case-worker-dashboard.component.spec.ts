import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseWorkerDashboardComponent } from './case-worker-dashboard.component';


describe('CaseWorkerDashboardComponent', () => {
  let component: CaseWorkerDashboardComponent;
  let fixture: ComponentFixture<CaseWorkerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseWorkerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseWorkerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
