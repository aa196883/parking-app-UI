import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.css']
})
export class TablePaginationComponent implements OnInit {
  page = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
