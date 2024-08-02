import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Evenement} from "../model/events";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
 urlApiUser="http://localhost:8080/user"
 urlApiUserSearch="http://localhost:8080/user/searchevents"
  urlApiAdmin="http://localhost:8080/admin"
  urlApi="http://localhost:8080"

  constructor(private http :HttpClient) { }

  public showAllEvents(){
    return this.http.get(`${this.urlApi}/evenements`)
  }
  SearchEvents(lieu: string, categorie: string, date: string): Observable<Evenement[]> {
    let params = new HttpParams();
    if (lieu) params = params.set('lieu', lieu);
    if (categorie) params = params.set('categorie', categorie);
    if (date) params = params.set('date', date);

    return this.http.get<Evenement[]>(this.urlApiUserSearch, { params });
  }


  getEvenementById(id: number): Observable<Evenement> {
    return this.http.get<Evenement>(`${this.urlApi}/evenement/${id}`);
  }

  public createEvenement(evenement: Evenement){
    return this.http.post(`${this.urlApi}/admin/evenement`, evenement);
  }

  public updateEvenement(id: number, evenement: Evenement): Observable<any> {
    return this.http.put(`${this.urlApi}/admin/evenement/update/${id}`, evenement);
  }

  public deleteEvenement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/admin/evenement/${id}`);
  }
}
