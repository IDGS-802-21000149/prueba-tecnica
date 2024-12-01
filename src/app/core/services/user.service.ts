import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly endpoint = '/usuario'; // Endpoint base

  constructor(private api: ApiService) {}

  getUsers(): Observable<User[]> {
    return this.api.get<User[]>(this.endpoint); // GET /usuario
  }

  getUser(id: number): Observable<User> {
    return this.api.get<User>(`${this.endpoint}/${id}`); // GET /usuario/{id}
  }

  createUser(user: User): Observable<User> {
    return this.api.post<User>(this.endpoint, user); // POST /usuario
  }

  deleteUser(id: number): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`); // DELETE /usuario/{id}
  }
}
