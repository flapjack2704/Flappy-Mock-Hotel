import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { RoomVacanciesComponent } from './room-vacancies/room-vacancies.component';


const routes: Routes = [
    { path: 'bookings', component: BookingsComponent },
    { path: 'room-vacancies', component: RoomVacanciesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
