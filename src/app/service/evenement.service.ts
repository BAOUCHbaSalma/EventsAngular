import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Evenement} from "../model/events";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
 // urlApiUser="http://localhost:8080/user"
  //urlApiAdmin="http://localhost:8080/admin"
  urlApi="http://localhost:8080"

  constructor(private http :HttpClient) { }

  public showAllEvents(){
    return this.http.get(`${this.urlApi}/evenements`)
  }



  // Retrieve a single event by ID
  getEvenementById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.urlApi}/evenement/${id}`);
  }

  // Create a new event
  createEvenement(evenement: Evenement): Observable<Evenement> {
    return this.http.post<Evenement>(`${this.urlApi}/admin/evenement`, evenement);
  }

  // Update an existing event
  updateEvenement(id: number, evenement: Evenement): Observable<Evenement> {
    return this.http.put<Evenement>(`${this.urlApi}/admin/evenement/update/${id}`, evenement);
  }

  // Delete an event by ID
  deleteEvenement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/admin/evenement/${id}`);
  }
}
