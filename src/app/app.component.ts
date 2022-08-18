import { Component, OnInit } from '@angular/core';
import { Parking } from './Parking';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { CancelBookingComponent } from './modals/cancel-booking/cancel-booking.component';
import { ModalTemplateComponent } from './modals/modal-template/modal-template.component';

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
    console
    this.sdwdsModalService
      .show<CancelBookingComponent, boolean>(CancelBookingComponent)
      .subscribe(res => {});
  }

}
