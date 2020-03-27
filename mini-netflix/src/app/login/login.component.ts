import { User } from './../services/auth/user';
import { AuthService } from './../services/auth/auth.service'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[];
  logIn: boolean;
  constructor (private authService: AuthService, private router: Router) {}

  ngOnInit (): void {
    this.authService.signIn().subscribe((response: User[]) => this.users = response)
  }

  login (id: number) {
    this.users.forEach(element => {
      if (id === element.id) {
        this.logIn = true
        console.log(this.logIn)
      }
    });
  }
}
