import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedSlotCardComponent } from './booked-slot-card.component';

describe('BookedSlotCardComponent', () => {
  let component: BookedSlotCardComponent;
  let fixture: ComponentFixture<BookedSlotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedSlotCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedSlotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
