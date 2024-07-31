import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Evenement} from "../model/events";
import {EvenementService} from "../service/evenement.service";

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {
  updateForm!: FormGroup;
  eventId!: number;
  evenement!: Evenement;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private evenementService: EvenementService
  ) {}

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    this.evenementService.getEvenementById(this.eventId).subscribe((data: Evenement) => {
      this.evenement = data;
      this.updateForm = this.fb.group({
        titre: [this.evenement.titre, Validators.required],
        description: [this.evenement.description, Validators.required],
        lieu: [this.evenement.lieu, Validators.required],
        dateEvenement: [this.evenement.dateEvenement, Validators.required],
        prix: [this.evenement.prix, [Validators.required, Validators.min(0)]],
        categorie: [this.evenement.categorie, Validators.required],
        heursEvenement: [this.evenement.heursEvenement, Validators.required],
        image: [this.evenement.image, Validators.required]
      });
    });
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.evenementService.updateEvenement(this.eventId, this.updateForm.value).subscribe(
        (response) => {
          console.log('Event updated successfully', response);
          this.router.navigate(['/events']);
        },
        (error) => {
          console.error('Error updating event', error);
        }
      );
    }
  }
}
