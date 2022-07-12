import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthResponseTokenObj, JWTDecoded } from "../models/auth";
import { Router } from "@angular/router";


@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:3000/';
  public userData: JWTDecoded | undefined;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public signup(email: string, password: string) {
    const res: Observable<AuthResponseTokenObj> = this.http.post<AuthResponseTokenObj>(this.baseUrl + 'auth/signup', { email, password });
    res.subscribe((response: AuthResponseTokenObj) => {
      this.setSession(response.token);
      this.router.navigate(["/welcome"]);
    });
  }

  public login(email: string, password: string) {
    const res: Observable<AuthResponseTokenObj> = this.http.post<AuthResponseTokenObj>(this.baseUrl + "auth/signin", { email, password });
    res.subscribe((response: AuthResponseTokenObj) => {
      this.setSession(response.token);
      this.router.navigate(["/dashboard"]);
    });
  }

  public logout() {
    localStorage.removeItem("token");
  }

  public isLoggedIn() {
    const expiration = localStorage.getItem("exp");
    if (!expiration) { return false; }
    const expiresAt = JSON.parse(expiration);
    return moment().isBefore(expiresAt);
  }

  private setSession(token: string) {
    localStorage.setItem("token", token);
    const helper = new JwtHelperService();
    this.userData = helper.decodeToken(token)

  }
}
