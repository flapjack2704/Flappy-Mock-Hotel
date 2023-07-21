import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomVacanciesComponent } from './room-vacancies.component';

describe('RoomVacanciesComponent', () => {
  let component: RoomVacanciesComponent;
  let fixture: ComponentFixture<RoomVacanciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomVacanciesComponent]
    });
    fixture = TestBed.createComponent(RoomVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
