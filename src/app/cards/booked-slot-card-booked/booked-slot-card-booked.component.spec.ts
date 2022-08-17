import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedSlotCardBookedComponent } from './booked-slot-card-booked.component';

describe('BookedSlotCardBookedComponent', () => {
  let component: BookedSlotCardBookedComponent;
  let fixture: ComponentFixture<BookedSlotCardBookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedSlotCardBookedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedSlotCardBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
