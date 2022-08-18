import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';

@Component({
  selector: 'app-release-parking',
  templateUrl: './release-parking.component.html',
  styleUrls: ['./release-parking.component.css']
})
export class ReleaseParkingComponent extends ModalTemplateComponent{
  header = "Release parking slot"
  body = "Are you sure you want to release this parking slot?"
  orange = "Yes"
  white = "No"

  constructor( activeModal: NgbActiveModal) {super(activeModal)}
}
