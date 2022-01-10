import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwTransportRequestComponent } from './cw-transport-request.component';

describe('CwTransportRequestComponent', () => {
  let component: CwTransportRequestComponent;
  let fixture: ComponentFixture<CwTransportRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CwTransportRequestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CwTransportRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
