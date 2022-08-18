import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFooterButtonsComponent } from './modal-footer-buttons.component';

describe('ModalFooterButtonsComponent', () => {
  let component: ModalFooterButtonsComponent;
  let fixture: ComponentFixture<ModalFooterButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFooterButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFooterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
