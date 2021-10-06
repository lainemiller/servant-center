import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaFormPageFourComponent } from './ia-form-page-four.component';

describe('IaFormPageFourComponent', () => {
  let component: IaFormPageFourComponent;
  let fixture: ComponentFixture<IaFormPageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaFormPageFourComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaFormPageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
