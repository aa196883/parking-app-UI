import { Component, OnInit } from '@angular/core';
import { Parking } from '../Parking';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-booked-slots-table',
  templateUrl: './booked-slots-table.component.html',
  styleUrls: ['./booked-slots-table.component.css']
})
export class BookedSlotsTableComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
}
