import { Component, OnInit } from '@angular/core';
import { Parking } from './Parking';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { CancelBookingComponent } from './modals/cancel-booking/cancel-booking.component';

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

  showSimpleModal(): void {
    this.sdwdsModalService
      .show<CancelBookingComponent, boolean>(CancelBookingComponent)
      .subscribe(res => {});
  }



}
