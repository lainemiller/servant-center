import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaFormPageTwoComponent } from './ia-form-page-two.component';

describe('IaFormPageTwoComponent', () => {
  let component: IaFormPageTwoComponent;
  let fixture: ComponentFixture<IaFormPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaFormPageTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaFormPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
