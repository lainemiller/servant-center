import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteranComponent } from './veteran.component';

describe('VeteranComponent', () => {
  let component: VeteranComponent;
  let fixture: ComponentFixture<VeteranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeteranComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
