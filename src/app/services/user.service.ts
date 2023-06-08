import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { USERS_BASE_URL } from '../utils/variables';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  // isUserAuth: boolean = false
  token: string | null = ''

  getUsers$(): Observable<User[]> {
    return this.http.get<User[]>(`${USERS_BASE_URL}`)
  }

  getUserById$(id: number): Observable<User> {
    return this.http.get<User>(`${USERS_BASE_URL}/${id}`)
  }

  isUserAuthenticated(): string | null {
    // return this.isUserAuth = !this.isUserAuth
    this.token = sessionStorage.getItem('token')
    return this.token
  }
}
