import { AuthService } from "./../services/auth/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Video } from "../services/videos/video";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  video: Video[];
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  login(form) {
    console.log(form.value);
    this.authService.signIn(form.value).subscribe(res => {
      console.log("Logged in");
      this.router.navigateByUrl("home");
    });
  }
}
