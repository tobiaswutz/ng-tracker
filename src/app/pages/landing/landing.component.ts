import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public email: string | undefined;
  public password: string | undefined;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public handleSignUp(): void {
    if (!this.email || !this.password) {
      alert("Please fill in all fields");
      return;
    }
    this.authService.signup(this.email, this.password);
  }

}
