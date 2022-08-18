import { Component, OnInit } from '@angular/core';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { ModalFooterButtonsComponent } from 'src/app/buttons/modal-footer-buttons/modal-footer-buttons.component';
//your custom component needs to import the NgbActiveModal service from ng-bootstrap
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent extends ModalTemplateComponent{

  constructor( activeModal: NgbActiveModal) {
    super(activeModal)
    super.modalHeader = "Cancel Booking"
    super.modalBody = "Are you sure you want to cancel this booking?\n\n In case you change your mind later, you will need to create another request which might not be approved."
    super.modalOrange = "Yes"
    super.modalWhite = "No"
  }

}
