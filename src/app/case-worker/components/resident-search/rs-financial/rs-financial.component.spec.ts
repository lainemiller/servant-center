import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsFinancialComponent } from './rs-financial.component';

describe('RsFinancialComponent', () => {
  let component: RsFinancialComponent;
  let fixture: ComponentFixture<RsFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsFinancialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
