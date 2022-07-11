import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    const val = this.form.value;

    if (val.email && val.password) {
      const user: Observable<User> = this.authService.login(val.email, val.password);
      user.subscribe(
        (user: User) => {
          console.log(user);
          
          this.router.navigateByUrl('/');
        }
      );
    }
  }
}

