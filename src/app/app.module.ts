import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvailableSlotsTableComponent } from './tables/available-slots-table/available-slots-table.component';
import { BookedSlotsTableComponent } from './tables/booked-slots-table/booked-slots-table.component';
import { BookedSlotCardNotBookedComponent } from './cards/booked-slot-card-not-booked/booked-slot-card-not-booked.component';
import { ReleasedSlotCardComponent } from './cards/released-slot-card/released-slot-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkingSlotsPageComponent } from './pages/parking-slots-page/parking-slots-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { OwnedSlotTableCellActionComponent } from './owned-slot-table-cell-action/owned-slot-table-cell-action.component';
import { AssignedSlotTableCellActionComponent } from './buttons/assigned-slot-table-cell-action/assigned-slot-table-cell-action.component';
import { AvailableSlotTableCellActionComponent } from './buttons/available-slot-table-cell-action/available-slot-table-cell-action.component';
import { BookedSlotCardBookedComponent } from './cards/booked-slot-card-booked/booked-slot-card-booked.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableSlotsTableComponent,
    BookedSlotsTableComponent,
    BookedSlotCardNotBookedComponent,
    ReleasedSlotCardComponent,
    NavbarComponent,
    ParkingSlotsPageComponent,
    HomePageComponent,
    SearchBarComponent,
    OwnedSlotTableCellActionComponent,
    AssignedSlotTableCellActionComponent,
    AvailableSlotTableCellActionComponent,
    BookedSlotCardBookedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
