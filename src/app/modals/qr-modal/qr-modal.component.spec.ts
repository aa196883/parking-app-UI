import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRModalComponent } from './qr-modal.component';

describe('QRModalComponent', () => {
  let component: QRModalComponent;
  let fixture: ComponentFixture<QRModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QRModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
