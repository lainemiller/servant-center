import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsMiscCorrespondenceComponent } from './rs-misc-correspondence.component';

describe('RsMiscCorrespondenceComponent', () => {
  let component: RsMiscCorrespondenceComponent;
  let fixture: ComponentFixture<RsMiscCorrespondenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsMiscCorrespondenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsMiscCorrespondenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
