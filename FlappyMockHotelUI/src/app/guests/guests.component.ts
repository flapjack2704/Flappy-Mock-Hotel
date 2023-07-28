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
    public guestToSearch: Guest;
    public guestFoundId: number;
    public guestFoundName: string;
    public guestFoundPhone: string;
    public guestFoundEmail: string;
    public allGuests: GuestInterface[] = [];
    public allGuestsButtonClicked = false;
    public showEmailFound = false;
    public showEmailNotFound = false;
    public showPhoneFound = false;
    public showPhoneNotFound = false;
    constructor(
        private apiservice: HotelAPIserviceService)
    {
        this.guest = new Guest('', '', '', '');
        this.guestToSearch = new Guest('', '', '', '');
        this.getAllGuests();
        this.guestFoundId = 0;
        this.guestFoundName = '';
        this.guestFoundPhone = '';
        this.guestFoundEmail = '';
    }


    public submitGuest() {
        this.apiservice.addNewGuest(JSON.parse(JSON.stringify(this.guest)));
        this.guest = new Guest('', '', '', '');
    }


    public showAllGuests() {
        this.getAllGuests();
        this.allGuestsButtonClicked = !this.allGuestsButtonClicked;
    }

    public searchGuestByEmail() {
        this.showEmailFound = false;
        this.showEmailNotFound = false;

        this.getAllGuests();

        for (let i = 0; i < this.allGuests.length; i++) {
            if (this.allGuests[i].email.toLowerCase() === this.guestToSearch.email.toLowerCase()) {
                this.guestFoundId = this.allGuests[i].id;
                this.guestFoundEmail = this.allGuests[i].email;
                this.guestFoundName = this.allGuests[i].firstName + " " + this.allGuests[i].lastName;
                this.guestFoundPhone = this.allGuests[i].phoneNumber;

                this.showEmailFound = true;
                this.showEmailNotFound = false;

            }
        }
        if (!this.showEmailFound) {
            this.showEmailNotFound = true;
        }
        this.showPhoneFound = false;
        this.showPhoneNotFound = false;

    }
    public searchGuestByPhone() {
        this.showPhoneFound = false;
        this.showPhoneNotFound = false;

        this.getAllGuests();

        for (let i = 0; i < this.allGuests.length; i++) {
            if (this.allGuests[i].phoneNumber === this.guestToSearch.phoneNumber) {
                this.guestFoundId = this.allGuests[i].id;
                this.guestFoundPhone = this.allGuests[i].phoneNumber;
                this.guestFoundName = this.allGuests[i].firstName + " " + this.allGuests[i].lastName;
                this.guestFoundEmail = this.allGuests[i].email;


                this.showPhoneFound = true;
                this.showPhoneNotFound = false;

                
            }
        }
        if (!this.showPhoneFound) {
            this.showPhoneNotFound = true;
        }
        this.showEmailFound = false;
        this.showEmailNotFound = false;

    }


    public getAllGuests() {
        this.apiservice.getAllGuests().subscribe(response => {
            this.allGuests = response;
        });
    }
} 
