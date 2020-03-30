import { AuthService } from './../services/auth/auth.service';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuMobile: boolean = false;
  constructor (private authService: AuthService) {}

  ngOnInit (): void {}

  toggleMenu (): void {
    this.menuMobile = !this.menuMobile;
  }

  logout (): void {
    this.authService.logout();
  }
}
