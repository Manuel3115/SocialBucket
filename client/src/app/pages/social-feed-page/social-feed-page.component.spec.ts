import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFeedPageComponent } from './social-feed-page.component';

describe('SocialFeedPageComponent', () => {
  let component: SocialFeedPageComponent;
  let fixture: ComponentFixture<SocialFeedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialFeedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFeedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
