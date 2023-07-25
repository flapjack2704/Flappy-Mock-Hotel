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
    vacancies: Room[] = [];
    singleVacancies: Room[] = [];
    doubleVacancies: Room[] = [];
    familyVacancies: Room[] = [];
    showRoomsClicked = false;
    showVacanciesClicked = false;
    showSingleVacanciesClicked = false;
    showDoubleVacanciesClicked = false;
    showFamilyVacanciesClicked = false;

    constructor(
        private apiservice: HotelAPIserviceService
    ) {
        this.getAllRooms();
        this.getAllBookings();
    }
    
    public showAllVacancies() {
        // Gets Bookings+Rooms, and "removes" booked rooms by roomNo

        this.vacancies = [];
        this.showVacanciesClicked = !this.showVacanciesClicked;

        for (let i = 0; i < this.rooms.length; i++) {
            if (!this.bookings.some(b => b.roomId === this.rooms[i].id)) {
                this.vacancies.push(this.rooms[i]);
            } 
        }
    }

    public showAllSingleVacancies() {
        // Gets Bookings+Rooms, and "removes" booked rooms by roomNo

        this.singleVacancies = [];
        this.showSingleVacanciesClicked = !this.showSingleVacanciesClicked;

        for (let i = 0; i < this.rooms.length; i++) {
            if (!this.bookings.some(b => b.roomId === this.rooms[i].id) && this.rooms[i].roomType === 0) {
                this.singleVacancies.push(this.rooms[i]);
            }
        }
    }

    public showAllDoubleVacancies() {
        // Gets Bookings+Rooms, and "removes" booked rooms by roomNo

        this.doubleVacancies = [];
        this.showDoubleVacanciesClicked = !this.showDoubleVacanciesClicked;

        for (let i = 0; i < this.rooms.length; i++) {
            if (!this.bookings.some(b => b.roomId === this.rooms[i].id) && this.rooms[i].roomType === 1) {
                this.doubleVacancies.push(this.rooms[i]);
            }
        }
    }

    public showAllFamilyVacancies() {
        // Gets Bookings+Rooms, and "removes" booked rooms by roomNo

        this.familyVacancies = [];
        this.showFamilyVacanciesClicked = !this.showFamilyVacanciesClicked;

        for (let i = 0; i < this.rooms.length; i++) {
            if (!this.bookings.some(b => b.roomId === this.rooms[i].id) && this.rooms[i].roomType === 2) {
                this.familyVacancies.push(this.rooms[i]);
            }
        }
    }

    public showAllRooms() {
        this.showRoomsClicked = !this.showRoomsClicked;
    }





    public getAllBookings() {
        this.apiservice.getAllBookings().subscribe(response => {
            this.bookings = response;
        })
    }


    public getAllRooms() {
        this.apiservice.getAllRooms().subscribe(response => {
            this.rooms = response;
        })
    }
    
}
