import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesToAddPageComponent } from './objectives-to-add-page.component';

describe('ObjectivesToAddPageComponent', () => {
  let component: ObjectivesToAddPageComponent;
  let fixture: ComponentFixture<ObjectivesToAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivesToAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectivesToAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
