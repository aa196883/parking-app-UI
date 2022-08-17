import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedSlotCardNotBookedComponent } from './booked-slot-card-not-booked.component';

describe('BookedSlotCardNotBookedComponent', () => {
  let component: BookedSlotCardNotBookedComponent;
  let fixture: ComponentFixture<BookedSlotCardNotBookedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedSlotCardNotBookedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedSlotCardNotBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
