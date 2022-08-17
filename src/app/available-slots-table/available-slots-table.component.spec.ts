import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableSlotsTableComponent } from './available-slots-table.component';

describe('AvailableSlotsTableComponent', () => {
  let component: AvailableSlotsTableComponent;
  let fixture: ComponentFixture<AvailableSlotsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableSlotsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableSlotsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
