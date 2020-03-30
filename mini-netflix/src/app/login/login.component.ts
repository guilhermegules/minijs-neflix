import { ProfileComponent } from './../profile/profile.component';
import { Router } from '@angular/router'
import { User } from './../services/auth/user'
import { AuthService } from './../services/auth/auth.service'
import { Component, OnInit, ViewChild } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[]
  profileForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  });
  constructor (private authService: AuthService) {}

  ngOnInit (): void {
    this.authService.signIn().subscribe((response: User[]) => this.users = response)
  }

  onSubmit() {
    this.users.forEach(user => {
      if(user.email === this.profileForm.value.email && user.pass === this.profileForm.value.pass) {
        this.authService.login(this.profileForm.value)
        user.isAuthenticated = true
      }
    })
  }

  isFieldInvalid(field: string) {
    return (
      (!this.profileForm.get(field).valid && this.profileForm.get(field).touched) ||
      (this.profileForm.get(field).untouched && this.profileForm)
    );
  }
}
