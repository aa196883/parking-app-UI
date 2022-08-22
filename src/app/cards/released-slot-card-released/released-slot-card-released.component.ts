import { Component, OnInit } from '@angular/core';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { RevokeParkingComponent } from 'src/app/modals/revoke-parking/revoke-parking.component';

@Component({
  selector: 'app-released-slot-card-released',
  templateUrl: './released-slot-card-released.component.html',
  styleUrls: ['./released-slot-card-released.component.css']
})
export class ReleasedSlotCardReleasedComponent implements OnInit {

  constructor(private sdwdsModalService: SdwdsModalService) {}

  ngOnInit(): void {}

  showRevokeModal(): void {
    this.sdwdsModalService
      .show<RevokeParkingComponent, boolean>(RevokeParkingComponent)
      .subscribe(res => {});
  }

}
