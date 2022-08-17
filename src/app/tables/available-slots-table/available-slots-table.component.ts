import { Component, OnInit } from '@angular/core';
import { Parking } from '../../Parking';
import { RequestServiceService } from '../../request-service.service';

@Component({
  selector: 'app-available-slots-table',
  templateUrl: './available-slots-table.component.html',
  styleUrls: ['./available-slots-table.component.css']
})
export class AvailableSlotsTableComponent implements OnInit {
  array : Parking[] = [];

  constructor(private service : RequestServiceService) { }

  ngOnInit(): void {
    this.array = this.service.getArray();

  }
}
