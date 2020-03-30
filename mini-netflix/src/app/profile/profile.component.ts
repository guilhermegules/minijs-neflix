import { AuthService } from './../services/auth/auth.service';
import { User } from './../services/auth/user';
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: User[];
  isLoggedIn$: Observable<boolean>
  constructor (private authService: AuthService) {}

  ngOnInit (): void {
    this.isLoggedIn$ = this.authService.isLoggedIn
    if(this.isLoggedIn$) {
      this.authService.signIn().subscribe((user) => {
        this.userProfile = user
        console.log(this.userProfile)
      })
    }
  }
}
