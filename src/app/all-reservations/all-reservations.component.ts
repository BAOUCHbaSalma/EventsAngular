import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { Reservation } from '../model/events';

@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.css']
})
export class AllReservationsComponent implements OnInit {
  reservations: Reservation[] = [];
  displayedColumns: string[] = ['idReservetion', 'dateReservation', 'heursReservation', 'evenement', 'user'];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getAllReservations().subscribe({
      next: (data) => {
        this.reservations = data;
      },
      error: (err) => {
        console.error('Error loading reservations', err);
      }
    });
  }
}
