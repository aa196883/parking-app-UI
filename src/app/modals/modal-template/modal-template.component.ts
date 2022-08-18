import { Component, OnInit } from '@angular/core';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { ModalFooterButtonsComponent } from 'src/app/buttons/modal-footer-buttons/modal-footer-buttons.component';
//your custom component needs to import the NgbActiveModal service from ng-bootstrap
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent {
  modalHeader!:string
  modalBody!:string
  modalOrange!:string
  modalWhite!:string

  constructor(public activeModal: NgbActiveModal) {}



}
