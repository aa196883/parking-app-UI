import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedSlotTableCellActionComponent } from './assigned-slot-table-cell-action.component';

describe('AssignedSlotTableCellActionComponent', () => {
  let component: AssignedSlotTableCellActionComponent;
  let fixture: ComponentFixture<AssignedSlotTableCellActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedSlotTableCellActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedSlotTableCellActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
