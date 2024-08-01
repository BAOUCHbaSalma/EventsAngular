import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvenementService } from '../service/evenement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private evenementService: EvenementService,
    private router: Router
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

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.evenementService.createEvenement(this.eventForm.value).subscribe(
        data => {
          console.log('Event created', data);
          this.router.navigate(['/show-event']).then(success => {
            if (success) {
              console.log('Navigation successful');
            } else {
              console.error('Navigation failed');
            }
          }).catch(error => {
            console.error('Navigation error', error);
          });
        },
        error => {
          console.error('Error creating event', error);
          alert('Failed to create event: ' + error.message);
        }
      );
    }
  }


}
