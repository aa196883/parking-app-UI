import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedSlotTableCellActionComponent } from './owned-slot-table-cell-action.component';

describe('OwnedSlotTableCellActionComponent', () => {
  let component: OwnedSlotTableCellActionComponent;
  let fixture: ComponentFixture<OwnedSlotTableCellActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnedSlotTableCellActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnedSlotTableCellActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
