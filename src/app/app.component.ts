import { Component, OnInit } from '@angular/core';
import { Parking } from './Parking';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { CancelBookingComponent } from './modals/cancel-booking/cancel-booking.component';
import { ModalTemplateComponent } from './modals/text-modal-template/text-modal-template.component';
import { ReleaseParkingComponent } from './modals/release-parking/release-parking.component';
import { RevokeParkingComponent } from './modals/revoke-parking/revoke-parking.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  array : Parking[] = [];

  constructor(private sdwdsModalService: SdwdsModalService) {}

  ngOnInit(): void {
  }

  showCancelModal(): void {
    this.sdwdsModalService
      .show<CancelBookingComponent, boolean>(CancelBookingComponent)
      .subscribe(res => {});
  }

  showReleaseModal(): void {
    this.sdwdsModalService
      .show<ReleaseParkingComponent, boolean>(ReleaseParkingComponent)
      .subscribe(res => {});
  }

  showRevokeModal(): void {
    this.sdwdsModalService
      .show<RevokeParkingComponent, boolean>(RevokeParkingComponent)
      .subscribe(res => {});
  }

}
