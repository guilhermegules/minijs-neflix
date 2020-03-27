import { User } from './../services/auth/user';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor (private authService: AuthService) {}

  ngOnInit (): void {
    this.authService.signIn().subscribe(data => this.user = data[0])
  }
}
