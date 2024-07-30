import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../service/reservation.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Erole, Reservation } from '../model/events';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrl: './addreservation.component.css'
})
export class AddreservationComponent implements OnInit{

  idEvenement!:any

   reservationForm!:FormGroup

  constructor(private srv:ReservationService,private fb:FormBuilder,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.idEvenement=this.route.snapshot.paramMap.get('ide')
    this.reservationForm=this.fb.group({
      dateReservation:'',
      HeursReservation:'',
      idEvenement:this.idEvenement,
      userId:''
    })
 }


 hundelSubmit(){
  const reservation:Reservation={
    idReservetion:0,
    dateReservation:this.reservationForm.value.dateReservation,
    HeursReservation:this.reservationForm.value.HeursReservation,
    
    evenement:{
      idEvenement: this.reservationForm.value.idEvenement,
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
      userId: this.reservationForm.value.userId,
      username: '',
      password: '',
      age: 0,
      email: '',
      role:Erole.USER 
    }
   
  }
  console.log(this.reservationForm.value.HeursReservation)
  
  this.srv.addReservation(reservation).subscribe(()=>{
    console.log(reservation.HeursReservation)
    this.ngOnInit()
  })
 }
 
  

}
