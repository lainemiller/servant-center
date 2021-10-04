import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScMainBodyComponent } from './sc-main-body.component';

describe('ScMainBodyComponent', () => {
  let component: ScMainBodyComponent;
  let fixture: ComponentFixture<ScMainBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScMainBodyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
