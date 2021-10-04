import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaFormPageFiveComponent } from './ia-form-page-five.component';

describe('IaFormPageFiveComponent', () => {
  let component: IaFormPageFiveComponent;
  let fixture: ComponentFixture<IaFormPageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaFormPageFiveComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaFormPageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
