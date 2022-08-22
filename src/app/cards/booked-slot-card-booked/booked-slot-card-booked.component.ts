import { Component, OnInit } from '@angular/core';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { CancelBookingComponent } from 'src/app/modals/cancel-booking/cancel-booking.component';

@Component({
  selector: 'app-booked-slot-card-booked',
  templateUrl: './booked-slot-card-booked.component.html',
  styleUrls: ['./booked-slot-card-booked.component.css']
})
export class BookedSlotCardBookedComponent implements OnInit {

  constructor(private sdwdsModalService: SdwdsModalService) {}

  ngOnInit(): void {}

  showCancelModal(): void {
    this.sdwdsModalService
      .show<CancelBookingComponent, boolean>(CancelBookingComponent)
      .subscribe(res => {});
  }

}
