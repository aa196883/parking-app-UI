import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-footer-buttons',
  templateUrl: './modal-footer-buttons.component.html',
  styleUrls: ['./modal-footer-buttons.component.css']
})
export class ModalFooterButtonsComponent implements OnInit {
  @Input() whiteButton = '';
  @Input() orangeButton = '';

  constructor() { }

  ngOnInit(): void {
  }

}
