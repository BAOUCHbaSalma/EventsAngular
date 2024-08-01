import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/events';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/admin/registres`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/admin/${id}`);
  }

  getUserProfile(id: any): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/profile/${id}`);
  }




}
