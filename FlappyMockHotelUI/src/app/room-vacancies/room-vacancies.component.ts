import { Component } from '@angular/core';
import { HotelAPIserviceService } from '../hotel-apiservice.service';

class Room {

    constructor(
        public id: number,
        public roomNo: number,
        public roomType: number,
        public pricePerNight: number,
    ) { }

}

interface RoomInterface {
    id: number;
    roomNo: number;
    roomType: number;
    pricePerNight: number;
}

class Guest {
    constructor(
        public id: string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public phone: string,


    ) { }
}

class Booking {
    constructor(
        public id: number,
        public startDate: string,
        public endDate: string,
        public room: Room,
        public roomId: number,
        public guest: Guest,
        public guestId: number,
        public totalPrice: number,
        public partySize: number
    ) { }
}

interface BookingInterface {
    id: number,
    startDate: string,
    endDate: string,
    room: Room,
    roomId: number,
    guest: Guest,
    guestId: number,
    totalPrice: number,
    partySize: number
}

@Component({
  selector: 'app-room-vacancies',
  templateUrl: './room-vacancies.component.html',
  styleUrls: ['./room-vacancies.component.css']
})
export class RoomVacanciesComponent {
    rooms: Room[] = [];
    roomIds: number[] = [];
    bookings: Booking[] = [];

    constructor(
        private apiservice: HotelAPIserviceService
    ) { }
    
    public getAllVacancies() {
        //const rooms: number[] = this.getAllRooms();
        this.apiservice.getAllBookings().subscribe(response => {
            this.bookings = response;
            console.log(response);
        })
    }

    public getAllRooms() {

        this.apiservice.getAllRooms().subscribe((response: any) => {
            this.rooms = response
            console.log(response);
        })
    }
    
}
