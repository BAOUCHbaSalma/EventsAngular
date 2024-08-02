import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Evenement } from '../model/events';
import { EvenementService } from '../service/evenement.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {
  listEvents: any;
  searchForm!: FormGroup;
  displayedColumns: string[] = ['titre', 'description', 'lieu', 'prix', 'categorie', 'heursEvenement', 'dateEvenement', 'image', 'actions'];
  categories: string[] = ['Music', 'Sports', 'Conference'];

  constructor(private srv: EvenementService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
    this.loadEvents();
  }

  initForm() {
    this.searchForm = this.fb.group({
      categorie: [''],
      lieu: [''],
      date: ['']
    });
  }

  loadEvents(): void {
    this.srv.showAllEvents().subscribe((events) => {
      this.listEvents = events;
    });
  }

  searchEvent(): void {
    const { categorie, lieu, date } = this.searchForm.value;
    this.srv.SearchEvents(lieu, categorie, date).subscribe((events: Evenement[]) => {
      this.listEvents = events;
    });
  }


  onUpdate(id: number): void {
    this.router.navigate(['/event-update', id]);
  }

  onDelete(id: number): void {
    this.srv.deleteEvenement(id).subscribe(() => {
      this.loadEvents();
    });
  }
}
