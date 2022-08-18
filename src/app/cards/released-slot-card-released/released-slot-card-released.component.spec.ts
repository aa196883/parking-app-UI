import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasedSlotCardReleasedComponent } from './released-slot-card-released.component';

describe('ReleasedSlotCardReleasedComponent', () => {
  let component: ReleasedSlotCardReleasedComponent;
  let fixture: ComponentFixture<ReleasedSlotCardReleasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasedSlotCardReleasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleasedSlotCardReleasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
