import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasedSlotCardComponent } from './released-slot-card-not-released-not-released.component';

describe('ReleasedSlotCardComponent', () => {
  let component: ReleasedSlotCardComponent;
  let fixture: ComponentFixture<ReleasedSlotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasedSlotCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleasedSlotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
