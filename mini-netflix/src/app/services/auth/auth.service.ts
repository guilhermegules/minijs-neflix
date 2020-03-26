import { async } from '@angular/core/testing'
import { Response } from './response'
import { User } from './user'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER = 'http://localhost:3333/login'
  authSubject = new BehaviorSubject(false)
  constructor (private httpClient: HttpClient) {}

  signIn (user: User): Observable<Response> {
    return this.httpClient.post(`${this.AUTH_SERVER}`, user).pipe(
      tap(async (res: Response) => {
        if (res.user) {
          localStorage.setItem('ACCESS_TOKEN', res.user.access_token)
          localStorage.setItem('EXPIRES_IN', res.user.expires_in)
          this.authSubject.next(true)
        }
      })
    )
  }

  signOut (): void {
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('EXPIRES_IN')
    this.authSubject.next(false)
  }

  isAuthenticated () {
    return this.authSubject.asObservable()
  }
}
