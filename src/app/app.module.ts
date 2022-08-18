import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvailableSlotsTableComponent } from './tables/available-slots-table/available-slots-table.component';
import { BookedSlotsTableComponent } from './tables/booked-slots-table/booked-slots-table.component';
import { BookedSlotCardNotBookedComponent } from './cards/booked-slot-card-not-booked/booked-slot-card-not-booked.component';
import { ReleasedSlotCardComponent } from './cards/released-slot-card-not-released/released-slot-card-not-released.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkingSlotsPageComponent } from './pages/parking-slots-page/parking-slots-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { OwnedSlotTableCellActionComponent } from './owned-slot-table-cell-action/owned-slot-table-cell-action.component';
import { AssignedSlotTableCellActionComponent } from './buttons/assigned-slot-table-cell-action/assigned-slot-table-cell-action.component';
import { AvailableSlotTableCellActionComponent } from './buttons/available-slot-table-cell-action/available-slot-table-cell-action.component';
import { BookedSlotCardBookedComponent } from './cards/booked-slot-card-booked/booked-slot-card-booked.component';
import { ReleasedSlotCardReleasedComponent } from './cards/released-slot-card-released/released-slot-card-released.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { CancelBookingComponent } from './modals/cancel-booking/cancel-booking.component';
import { ModalFooterButtonsComponent } from './buttons/modal-footer-buttons/modal-footer-buttons.component';
import { SdwdsModalModule } from '@sdworx/sdwds-modal';
import { ModalTemplateComponent } from './modals/modal-template/modal-template.component';
import { ReleaseParkingComponent } from './modals/release-parking/release-parking.component';
import { RevokeParkingComponent } from './modals/revoke-parking/revoke-parking.component';
import { BookParkingComponent } from './modals/book-parking/book-parking.component';

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
    ReleasedSlotCardReleasedComponent,
    TablePaginationComponent,
    CancelBookingComponent,
    ModalFooterButtonsComponent,
    ModalTemplateComponent,
    ReleaseParkingComponent,
    RevokeParkingComponent,
    BookParkingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    SdwdsModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
