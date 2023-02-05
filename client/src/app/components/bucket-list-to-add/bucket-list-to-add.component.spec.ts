import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListToAddComponent } from './bucket-list-to-add.component';

describe('BucketListToAddComponent', () => {
  let component: BucketListToAddComponent;
  let fixture: ComponentFixture<BucketListToAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucketListToAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketListToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
