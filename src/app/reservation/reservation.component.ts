import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { FormGroup } from '@angular/forms';
import { Reservation } from '../model/events';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit{
  reservationList:Reservation[]=[]
  idUser!:any
  dataSource = new MatTableDataSource<Reservation>();
  constructor(private srv:ReservationService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.idUser=this.route.snapshot.paramMap.get("id")
    this.srv.showReservation(this.idUser).subscribe(value=>{
      this.reservationList=value
      this.dataSource.data = this.reservationList;
    })

  
  }
  displayedColumns: string[] = ['Date reservation', 'Heurs reservation', 'id evenement'];
  

}
