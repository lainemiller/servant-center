import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentDataComponent } from './consent-data.component';

describe('ConsentDataComponent', () => {
  let component: ConsentDataComponent;
  let fixture: ComponentFixture<ConsentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsentDataComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
