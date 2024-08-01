import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';  // Assurez-vous que le chemin est correct
import { Reservation } from '../model/events';  // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.css']
})
export class AllReservationsComponent implements OnInit {
  reservations: Reservation[] = [];

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
