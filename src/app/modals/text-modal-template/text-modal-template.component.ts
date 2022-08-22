import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-text-modal-template',
  templateUrl: './text-modal-template.component.html',
  styleUrls: ['./text-modal-template.component.css']
})
export class ModalTemplateComponent {
  @Input() modalWhite = '';
  @Input() modalOrange = '';
  @Input() modalHeader = '';
  @Input() modalBody = '';

  constructor(public activeModal: NgbActiveModal) {}
}
