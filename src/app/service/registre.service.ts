import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/events';

@Injectable({
  providedIn: 'root'
})
export class RegistreService {
  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApi="http://localhost:8080"
  constructor(private http:HttpClient) { }

  public registre(FormData:User){
    return this.http.post(`${this.urlApiUser}/signup`,FormData)
  }
}
