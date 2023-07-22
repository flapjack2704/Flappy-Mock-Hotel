import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class HotelAPIserviceService {

    constructor(private http: HttpClient) { }

    public getAllBookings(): Observable<any> {
        const url = 'https://localhost:7262/api/flappy-hotel-bookings/bookings'
        return this.http.get(url);

        /* Sample booking from get, all one line
            [{"id":1,"startDate":"2023-06-30T12:17:26.798","endDate":"2023-06-30T12:17:26.798",
                "room":{"id":1,"roomNo":"101","roomType":1,"pricePerNight":50.00}
              ,"roomId":1,
                "guest":{"id":1,"firstName":"Hugh","lastName":"Jass","email":"HughJass420@gmail.com","phoneNumber":"0800001066","billings":[],"bookings":[null]}
              ,"guestId":1,"totalPrice":50.00,"partySize":1}]
        */
    }

    public getAllRooms(): Observable<any> {
        const url = 'https://localhost:7262/api/flappy-hotel-bookings/rooms'
        return this.http.get(url);
    }
}
