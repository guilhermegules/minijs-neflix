import { User } from './user'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  authServer = 'http://localhost:3333/users'
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor (private httpClient: HttpClient, private router: Router) {}

  signIn (): Observable<User[]> {
    return this.httpClient.get<User[]>(this.authServer)
  }

  login(user: User): void {
    if (user.name !== '' && user.pass !== '' ) {
      this.loggedIn.next(true);
      this.router.navigate(['/main-page']);
    }
  }

  logout(): void {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
