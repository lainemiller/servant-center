import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseWorkerComponent } from './case-worker.component';


describe('CaseWorkerComponent', () => {
  let component: CaseWorkerComponent;
  let fixture: ComponentFixture<CaseWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaseWorkerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
