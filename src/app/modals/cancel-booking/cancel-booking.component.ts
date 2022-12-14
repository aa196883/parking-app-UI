import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTemplateComponent } from '../text-modal-template/text-modal-template.component';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent extends ModalTemplateComponent{
  header = "Cancel Booking"
  body = "Are you sure you want to cancel this booking?\n\n In case you change your mind later, you will need to create another request which might not be approved."
  orange = "Yes"
  white = "No"

  constructor( activeModal: NgbActiveModal) {super(activeModal)}
}
