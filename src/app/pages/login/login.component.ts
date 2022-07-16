import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string | undefined;
  public password: string | undefined;
  

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public handleLogin(): void {
    if (!this.email || !this.password) {
      alert("Please fill in all fields");
      return;
    }
    this.authService.login(this.email, this.password);
  }

}
