import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSlotsPageComponent } from './parking-slots-page.component';

describe('ParkingSlotsPageComponent', () => {
  let component: ParkingSlotsPageComponent;
  let fixture: ComponentFixture<ParkingSlotsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSlotsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSlotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
