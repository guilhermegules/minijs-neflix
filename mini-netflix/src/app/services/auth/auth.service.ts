import { User } from './user'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER = 'http://localhost:3333/login'
  authSubject = new BehaviorSubject(false)
  constructor (private httpClient: HttpClient) {}

  signIn (): Observable<User[]> {
    return this.httpClient.get<User[]>(this.AUTH_SERVER);
  }

  signOut (): void {
    console.log('testing')
  }

  isAuthenticated () {
    return this.authSubject.asObservable()
  }
}
