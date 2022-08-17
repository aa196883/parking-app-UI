import { Component, OnInit } from '@angular/core';
// import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { Parking } from '../Parking';
import { RequestServiceService } from '../request-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  parkings: Parking[] = [];
  assignees: string[] = [];

  constructor(private service: RequestServiceService) { }

  ngOnInit(): void {
    this.parkings = this.service.getArray();
    this.assignees.push('Marc Vercammen');
    this.assignees.push('Sarah Reese');
  }

}

