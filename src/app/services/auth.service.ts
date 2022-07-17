import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Observable, Subject } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthResponseTokenObj, JWTDecoded } from "../models/auth";
import { Router } from "@angular/router";


@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:3000/';

  public loggedIn: Subject<boolean> = new Subject<boolean>();
  public userData: JWTDecoded | undefined;


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem("token");
    if (!token) { return false; }
    const expired: boolean = helper.isTokenExpired(token);
    if (expired) { this.logout(); return false; }
    return true;
  }

  public signup(email: string, password: string): void {
    const res: Observable<any> = this.http.post(this.baseUrl + "auth/signup", { email, password }, { observe: 'response' });
    res.subscribe({
      next: (response) => {
        this.setSession(response.body.access_token);
        this.router.navigate(["/welcome"]);
      },
      error: (error) => {
        alert(error.error.message);
      }
    });
  }

  public login(email: string, password: string): void {
    const res: Observable<any> = this.http.post(this.baseUrl + "auth/signin", { email, password });
    res.subscribe({
      next: (response) => {
        this.setSession(response.access_token);
        this.router.navigate(["/dashboard"]);
      },
      error: (error) => {
        alert(error.error.message);
      }
    });
  }

  public logout(): void {
    localStorage.removeItem("token");
    this.loggedIn.next(false);
  }

  private setSession(token: string) {
    localStorage.setItem("token", token);
    const helper = new JwtHelperService();
    this.userData = helper.decodeToken(token)
    console.log(this.userData);
    this.loggedIn.next(true);
  }
}
