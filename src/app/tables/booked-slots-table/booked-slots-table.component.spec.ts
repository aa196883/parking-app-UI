import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedSlotsTableComponent } from './booked-slots-table.component';

describe('BookedSlotsTableComponent', () => {
  let component: BookedSlotsTableComponent;
  let fixture: ComponentFixture<BookedSlotsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedSlotsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedSlotsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
