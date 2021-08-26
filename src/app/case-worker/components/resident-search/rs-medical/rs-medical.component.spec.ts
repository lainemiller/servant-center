import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsMedicalComponent } from './rs-medical.component';

describe('RsMedicalComponent', () => {
  let component: RsMedicalComponent;
  let fixture: ComponentFixture<RsMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
