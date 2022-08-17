import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvailableSlotsTableComponent } from './available-slots-table/available-slots-table.component';
import { BookedSlotsTableComponent } from './booked-slots-table/booked-slots-table.component';
import { BookedSlotCardComponent } from './booked-slot-card/booked-slot-card.component';
import { ReleasedSlotCardComponent } from './released-slot-card/released-slot-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkingSlotsPageComponent } from './parking-slots-page/parking-slots-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { OwnedSlotTableCellActionComponent } from './owned-slot-table-cell-action/owned-slot-table-cell-action.component';
import { AssignedSlotTableCellActionComponent } from './assigned-slot-table-cell-action/assigned-slot-table-cell-action.component';
import { AvailableSlotTableCellActionComponent } from './available-slot-table-cell-action/available-slot-table-cell-action.component';

@NgModule({
  declarations: [
    AppComponent,
    AvailableSlotsTableComponent,
    BookedSlotsTableComponent,
    BookedSlotCardComponent,
    ReleasedSlotCardComponent,
    NavbarComponent,
    ParkingSlotsPageComponent,
    HomePageComponent,
    SearchBarComponent,
    OwnedSlotTableCellActionComponent,
    AssignedSlotTableCellActionComponent,
    AvailableSlotTableCellActionComponent,
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
