import { Component } from '@angular/core';

class Guest{
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public phone: string,

  ){ }
}

class Booking{
  constructor(
    public guestId?: number
  ){ }
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
    public guest: Guest;
    public booking: Booking;

    constructor() {
        this.guest = new Guest('', '', '', '');
        this.booking = new Booking();
    }

    public submitBooking() {
        alert("Booking button clicked")
    }

    public submitGuest() {
        alert("Guest button clicked")
    }
}
