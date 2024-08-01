
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../service/evenement.service';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {
  eventForm!: FormGroup;
  eventId!: number;

  constructor(
    private fb: FormBuilder,
    private evenementService: EvenementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    this.initForm();
    this.loadEvent();
  }

  initForm(): void {
    this.eventForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      lieu: ['', Validators.required],
      dateEvenement: ['', Validators.required],
      prix: ['', Validators.required],
      categorie: ['', Validators.required],
      heursEvenement: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  loadEvent(): void {
    this.evenementService.getEvenementById(this.eventId).subscribe(event => {
      this.eventForm.patchValue(event);
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.evenementService.createEvenement(this.eventForm.value).subscribe(
        data => {
          console.log('Event created', data);
          this.router.navigate(['/show-event'])
            .then(success => {
              if (success) {
                console.log('Navigation successful');
              } else {
                console.error('Navigation failed');
              }
            })

        },

      );
    }
  }


}
