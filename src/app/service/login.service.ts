import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../model/events';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public login(loginData:LoginRequest){
    return this.http.post(`${this.urlApi}/login`,loginData)
  }
  public findIdByUsername(username:string){
    return this.http.get(`${this.urlApi}/findi?username=${username}`)
  }
}
