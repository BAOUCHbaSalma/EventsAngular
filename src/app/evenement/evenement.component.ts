import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../service/evenement.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.css'
})
export class EvenementComponent implements OnInit{
  listEvents:any
  searchForm!:FormGroup

  constructor(private srv:EvenementService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.initForm()
    this.srv.showAllEvents().subscribe(value=>{
      this.listEvents=value
    })
 
  }
  initForm(){
    this.searchForm=this.fb.group({
      categorie:'',
      lieu:'',
      date:''
    })

  }
  searchEvents(): void {
    const { categorie, lieu, date } = this.searchForm.value;
    this.srv.SearchEvents(lieu, categorie, date).subscribe(res => {
      this.listEvents = res;
    });
  }
    

  }



