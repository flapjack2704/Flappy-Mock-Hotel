import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { FormsModule } from '@angular/forms';
import { RoomVacanciesComponent } from './room-vacancies/room-vacancies.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingsComponent,
    RoomVacanciesComponent,

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
