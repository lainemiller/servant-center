import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportRequestFormComponent } from './transport-request-form.component';

describe('TransportRequestFormComponent', () => {
  let component: TransportRequestFormComponent;
  let fixture: ComponentFixture<TransportRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
