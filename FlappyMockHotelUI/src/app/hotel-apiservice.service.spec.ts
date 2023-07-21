import { TestBed } from '@angular/core/testing';

import { HotelAPIserviceService } from './hotel-apiservice.service';

describe('HotelAPIserviceService', () => {
  let service: HotelAPIserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelAPIserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
