import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerPageMainComponent } from './tracker-page-main.component';

describe('TrackerPageMainComponent', () => {
  let component: TrackerPageMainComponent;
  let fixture: ComponentFixture<TrackerPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackerPageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
