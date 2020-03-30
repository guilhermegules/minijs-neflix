import { User } from './../services/auth/user';
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: User;
  constructor () {}

  ngOnInit (): void {
  }
}
