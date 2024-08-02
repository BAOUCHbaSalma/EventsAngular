import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../service/evenement.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Erole, Reservation } from '../model/events';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  listEvents: any;
  searchForm!: FormGroup;
  

  constructor(private srv: EvenementService,private fb: FormBuilder, private router: Router,private resrv:ReservationService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadEvents();
  }

  initForm() {
    this.searchForm = this.fb.group({
      categorie: '',
      lieu: '',
      date: ''
    });
  }

  loadEvents(): void {
    this.srv.showAllEvents().subscribe(value => {
      this.listEvents = value;
    });
  }

  searchEvents(): void {
    const { categorie, lieu, date } = this.searchForm.value;
    this.srv.SearchEvents(lieu, categorie, date).subscribe(res => {
      this.listEvents = res;
    });
  }
  Reserve(id:number){
const reservation:Reservation={
    idReservetion:0,
    dateReservation:"",
    heursReservation:"",
    
    evenement:{
      idEvenement: id,
      titre: '',
      description: '',
      lieu: '',
      dateEvenement: '',
      prix: 0,
      categorie: '',
      heursEvenement: '',
      image: ''
    },
    user:{
      userId:9,
      username: '',
      password: '',
      age: 0,
      email: '',
      role:Erole.USER 
    }
   
  }
  

  this.resrv.addReservation(reservation).subscribe(()=>{
    alert("Reservation")
    this.ngOnInit()
  })
  }

  

}
