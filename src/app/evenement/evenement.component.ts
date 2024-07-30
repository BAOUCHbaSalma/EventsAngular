import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../service/evenement.service';
import { Evenement } from '../model/events';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.css'
})
export class EvenementComponent implements OnInit{
  listEvents:any

  constructor(private srv:EvenementService){}
  ngOnInit(): void {
    this.srv.showAllEvents().subscribe(value=>{
      this.listEvents=value

    })
 
  }

}
