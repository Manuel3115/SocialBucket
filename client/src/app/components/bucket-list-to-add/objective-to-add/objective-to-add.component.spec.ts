import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveToAddComponent } from './objective-to-add.component';

describe('ObjectiveToAddComponent', () => {
  let component: ObjectiveToAddComponent;
  let fixture: ComponentFixture<ObjectiveToAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveToAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
