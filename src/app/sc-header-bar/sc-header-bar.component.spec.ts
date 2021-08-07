import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScHeaderBarComponent } from './sc-header-bar.component';

describe('ScHeaderBarComponent', () => {
  let component: ScHeaderBarComponent;
  let fixture: ComponentFixture<ScHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScHeaderBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
