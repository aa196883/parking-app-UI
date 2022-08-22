import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTemplateComponent } from '../text-modal-template/text-modal-template.component';

@Component({
  selector: 'app-revoke-parking',
  templateUrl: './revoke-parking.component.html',
  styleUrls: ['./revoke-parking.component.css']
})
export class RevokeParkingComponent extends ModalTemplateComponent{
  header = "Revoke parking slot"
  body = "Are you sure you want to revoke this parking slot?"
  orange = "Yes"
  white = "No"

  constructor( activeModal: NgbActiveModal) {super(activeModal)}
}
