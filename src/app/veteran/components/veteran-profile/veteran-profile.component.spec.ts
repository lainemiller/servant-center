import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteranProfileComponent } from './veteran-profile.component';

describe('VeteranProfileComponent', () => {
  let component: VeteranProfileComponent;
  let fixture: ComponentFixture<VeteranProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeteranProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteranProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
