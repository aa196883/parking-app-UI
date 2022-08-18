import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseParkingComponent } from './release-parking.component';

describe('ReleaseParkingComponent', () => {
  let component: ReleaseParkingComponent;
  let fixture: ComponentFixture<ReleaseParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseParkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
