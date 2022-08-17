import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSlotTableCellActionComponent } from './available-slot-table-cell-action.component';

describe('AvailableSlotTableCellActionComponent', () => {
  let component: AvailableSlotTableCellActionComponent;
  let fixture: ComponentFixture<AvailableSlotTableCellActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableSlotTableCellActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableSlotTableCellActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
