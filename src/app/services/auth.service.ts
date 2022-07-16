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
  public userData: JWTDecoded | undefined;

  public loggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if (!token) { return false; }
    const helper = new JwtHelperService();
    const expired: boolean = helper.isTokenExpired(token);
    if (expired) { this.logout(); return false; }
    return true;
    
  }

  public signup(email: string, password: string): void {
    const res: Observable<AuthResponseTokenObj> = this.http.post<AuthResponseTokenObj>(this.baseUrl + 'auth/signup', { email, password });
    res.subscribe((response: AuthResponseTokenObj) => {
      console.log(response);
      
      this.setSession(response.access_token);
      this.router.navigate(["/dashboard"]);
    });
  }

  public login(email: string, password: string): void {
    const res: Observable<AuthResponseTokenObj> = this.http.post<AuthResponseTokenObj>(this.baseUrl + "auth/signin", { email, password });
    res.subscribe((response: AuthResponseTokenObj) => {
      console.log(response);
      this.setSession(response.access_token);
      this.router.navigate(["/dashboard"]);
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
    this.loggedIn.next(true);
  }
}
