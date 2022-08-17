import { Component, OnInit } from '@angular/core';
import { Parking } from './Parking';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  array : Parking[] = [];

  ngOnInit(): void {
  }
  


}
