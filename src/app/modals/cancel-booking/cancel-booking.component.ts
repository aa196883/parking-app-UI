import { Component, OnInit } from '@angular/core';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { ModalFooterButtonsComponent } from 'src/app/buttons/modal-footer-buttons/modal-footer-buttons.component';
//your custom component needs to import the NgbActiveModal service from ng-bootstrap
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent{

  constructor(public activeModal: NgbActiveModal) {}

  ok(): void {
    //close the current modal with a specific return value
    //this triggers the subscription we have on the modal in our typescript code
    this.activeModal.close(true);
  }

}
