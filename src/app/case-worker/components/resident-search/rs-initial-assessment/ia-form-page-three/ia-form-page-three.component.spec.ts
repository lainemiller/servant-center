import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaFormPageThreeComponent } from './ia-form-page-three.component';

describe('IaFormPageThreeComponent', () => {
  let component: IaFormPageThreeComponent;
  let fixture: ComponentFixture<IaFormPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaFormPageThreeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaFormPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
