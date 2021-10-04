import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaFormPageOneComponent } from './ia-form-page-one.component';

describe('IaFormPageOneComponent', () => {
  let component: IaFormPageOneComponent;
  let fixture: ComponentFixture<IaFormPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaFormPageOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaFormPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
