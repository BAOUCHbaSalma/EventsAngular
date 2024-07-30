import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../model/events';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public showReservation(id:Number):Observable<Array<Reservation>>{
    return this.http.get<Array<Reservation>>(`${this.urlApi}/reservations/${id}`)
  }
  public addReservation(FormData:Reservation){
    return this.http.post(`${this.urlApiUser}/reservation`,FormData)
  }
  
}
