import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvenementService } from '../service/evenement.service';
import { Router } from '@angular/router';
import { Evenement } from "../model/events";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private evenementService: EvenementService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      lieu: ['', Validators.required],
      dateEvenement: ['', Validators.required],
      prix: [null, [Validators.required, Validators.min(0)]],
      categorie: ['', Validators.required],
      heursEvenement: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const event: Evenement = this.eventForm.value;
    this.evenementService.createEvenement(event).subscribe(
      () => {
        this.router.navigate(['/show-event']);
      }
    );
  }
}
