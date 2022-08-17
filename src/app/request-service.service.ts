import { Injectable } from '@angular/core';
import { Parking } from './Parking';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {
  array: Parking[] = [];

  constructor() {
    this.array.push(new Parking('B2', 'Tom Smith', 'Available', '', 3));
    this.array.push(new Parking('C4', 'Alice Miller', 'Booked', 'Marc Vercammen', 2));
    this.array.push(new Parking('D9', 'Bob Jackson', 'Booked', 'Sarah Reeselok', 0));
    this.array.push(new Parking('E10', 'Marc Vercammen', 'Released', '', 1));
    this.array.push(new Parking('P1', 'Marc Vercammen', 'Released', '', 1));
  }

  getArray(): Parking[]{
    return this.array;
  }
}
