import { Component, OnInit } from '@angular/core';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { ReleaseParkingComponent } from 'src/app/modals/release-parking/release-parking.component';

@Component({
  selector: 'app-released-slot-card-not-released',
  templateUrl: './released-slot-card-not-released.component.html',
  styleUrls: ['./released-slot-card-not-released.component.css']
})
export class ReleasedSlotCardComponent implements OnInit {

  constructor(private sdwdsModalService: SdwdsModalService) {}

  ngOnInit(): void {}

  showReleaseModal(): void {
    this.sdwdsModalService
      .show<ReleaseParkingComponent, boolean>(ReleaseParkingComponent)
      .subscribe(res => {});
  }

}
