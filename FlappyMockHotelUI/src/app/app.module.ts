import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FormsModule } from '@angular/forms';
import { RoomVacanciesComponent } from './room-vacancies/room-vacancies.component';
import { GuestsComponent } from './guests/guests.component';
import { BillingsComponent } from './billings/billings.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    RoomVacanciesComponent,
    GuestsComponent,
    BillingsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
