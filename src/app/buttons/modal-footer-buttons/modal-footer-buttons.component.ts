import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-footer-buttons',
  templateUrl: './modal-footer-buttons.component.html',
  styleUrls: ['./modal-footer-buttons.component.css']
})
export class ModalFooterButtonsComponent implements OnInit {
  @Input() whiteButton = '';
  @Input() orangeButton = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {}

  ok(): void {
    //close the current modal with a specific return value
    this.activeModal.close(true);
  }

}
