import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevokeParkingComponent } from './revoke-parking.component';

describe('RevokeParkingComponent', () => {
  let component: RevokeParkingComponent;
  let fixture: ComponentFixture<RevokeParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevokeParkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevokeParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
