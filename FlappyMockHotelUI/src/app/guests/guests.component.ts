import { Component } from '@angular/core';
import { HotelAPIserviceService } from '../hotel-apiservice.service';

class Guest {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,

    ) { }
}

interface GuestInterface {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})

export class GuestsComponent {
    public guest: Guest;
    public allGuests: GuestInterface[] = [];
    public allGuestsButtonClicked = false;
    constructor(
        private apiservice: HotelAPIserviceService)
    {
        this.guest = new Guest('', '', '', '');
        this.getAllGuests();
    }


    public submitGuest() {
        this.apiservice.addNewGuest(JSON.parse(JSON.stringify(this.guest)));
    }


    public showAllGuests() {
        this.getAllGuests();
        this.allGuestsButtonClicked = !this.allGuestsButtonClicked;
    }

    public getAllGuests() {
        this.apiservice.getAllGuests().subscribe(response => {
            console.log(response);
            this.allGuests = response;
        });
    }
} 
