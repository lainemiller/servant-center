import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsConsentAgreementsComponent } from './rs-consent-agreements.component';

describe('RsConsentAgreementsComponent', () => {
  let component: RsConsentAgreementsComponent;
  let fixture: ComponentFixture<RsConsentAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsConsentAgreementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsConsentAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
