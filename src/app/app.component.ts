import { Component, OnInit } from '@angular/core';
import { Parking } from './Parking';
import { SdwdsModalService } from '@sdworx/sdwds-modal';
import { QRModalComponent } from './modals/qr-modal/qr-modal.component';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

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

  showQRModal(): void {
    const complexOptions: NgbModalOptions = {
      size: 'sm',
      animation: true,
    };

    this.sdwdsModalService
      .show<QRModalComponent, boolean>(QRModalComponent, undefined, complexOptions)
      .subscribe(res => {});
  }



}
