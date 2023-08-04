import { Component } from '@angular/core';
import { HotelAPIserviceService } from '../hotel-apiservice.service';

class Guest{
    constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,

  ){ }
}

interface IGuest {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

class Room {

    constructor(
        public id: number,
        public roomNo: string,
        public roomType: number,
        public pricePerNight: number,
    ) { }

}

interface IRoom {
    id: number;
    roomNo: string;
    roomType: number;
    pricePerNight: number;
}


class Booking{
  constructor(
      public guestId: number,
      public startDate: string,
      public endDate: string,
      public roomId: number,
      public roomNo: string,
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
    public rooms: IRoom[] = [];
    public guests: IGuest[] = [];

    constructor(private http: HotelAPIserviceService) {
        this.guest = new Guest('', '', '', '');
        this.room = new Room(0,'',0,0);
        this.booking = new Booking(0, '', '', 0, '', 0, 0);
        this.getAllRooms();
        this.getAllGuests();
    }

    public submitBooking() {
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].roomNo === this.booking.roomNo) {
                this.booking.roomId = this.rooms[i].id;

                //to-do   add logic to calculate no. of nights
                this.booking.totalPrice = this.rooms[i].pricePerNight;
                break;
            }
        }

        alert(JSON.stringify(this.booking));
       
        this.http.addNewBooking(JSON.parse(JSON.stringify(this.booking)));
        this.booking = new Booking(0, '', '', 0, '', 0, 0);
    }

    public getAllRooms() {
        this.http.getAllRooms().subscribe(response => {
            this.rooms = response;
            console.log(this.rooms)
        })
    }

    public getAllGuests() {
        this.http.getAllGuests().subscribe(response => {
            this.guests = response;
        })
    }

}
