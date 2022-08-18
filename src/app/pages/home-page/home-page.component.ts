import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../../request-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  slotIsBooked: boolean;
  slotIsReleased: boolean;
  
  constructor(private service : RequestServiceService) {
    this.slotIsBooked = this.service.getBookedSlotStatus();
    this.slotIsReleased = this.service.getReleasedSlotStatus();
  }

  ngOnInit(): void {
  }

}
