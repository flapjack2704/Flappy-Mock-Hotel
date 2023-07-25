import { Component } from '@angular/core';
import { HotelAPIserviceService } from '../hotel-apiservice.service';

class Guest{
  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public phone: string,

  ){ }
}

class Room {

    constructor(
        public id: number,
        public roomNo: number,
        public roomType: number,
        public pricePerNight: number,
    ) { }

}


class Booking{
  constructor(
      public guestId: number,
      public startDate: string,
      public endDate: string,
      public room: Room,
      public roomId: number,
      public guest: Guest,
      public totalPrice: number,
      public partySize: number
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
    public room: Room;

    constructor(private http: HotelAPIserviceService) {
        this.guest = new Guest('', '', '', '');
        this.room = new Room(0,0,0,0);
        this.booking = new Booking(0, '', '', this.room, 0, this.guest, 0, 0);
    }

    public submitBooking() {
        alert("Booking button clicked")
    }

    public submitGuest() {
        alert("Guest button clicked")
    }
}
