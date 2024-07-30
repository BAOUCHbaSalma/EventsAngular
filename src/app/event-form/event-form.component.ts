import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvenementService } from '../service/evenement.service';
import { Evenement } from '../model/events';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @Input() evenementId?: number;
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private evenementService: EvenementService
  ) {
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

  ngOnInit(): void {
    if (this.evenementId) {
      this.evenementService.getEvenementById(this.evenementId).subscribe(
        data => this.eventForm.patchValue(data),
        error => console.error('Error fetching event details', error)
      );
    }
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      if (this.evenementId) {
        this.evenementService.updateEvenement(this.evenementId, this.eventForm.value).subscribe(
          data => console.log('Event updated', data),
          error => console.error('Error updating event', error)
        );
      } else {
        this.evenementService.createEvenement(this.eventForm.value).subscribe(
          data => console.log('Event created', data),
          error => console.error('Error creating event', error)
        );
      }
    }
  }
}
