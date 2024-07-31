import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/events';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public sendMessage(messageForm:Contact){
    return this.http.post(`${this.urlApi}/contact`,messageForm)
  }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.urlApi}/admin/contacts`);
  }
}
