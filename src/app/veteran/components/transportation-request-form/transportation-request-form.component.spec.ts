import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationRequestFormComponent } from './transportation-request-form.component';

describe('TransportationRequestFormComponent', () => {
  let component: TransportationRequestFormComponent;
  let fixture: ComponentFixture<TransportationRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransportationRequestFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
