import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
