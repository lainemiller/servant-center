import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageMainComponent } from './profile-page-main.component';

describe('ProfilePageMainComponent', () => {
  let component: ProfilePageMainComponent;
  let fixture: ComponentFixture<ProfilePageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
