import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Observable } from "rxjs";
import { User } from "../models/user";

interface AuthResponse {
  token: string;
}

@Injectable()
export class AuthService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const res: Observable<AuthResponse> = this.http.post<AuthResponse>(this.baseUrl + "auth.signin", { email, password });
    res.subscribe((response: AuthResponse) => {
      if (response.token) {
        this.setSession(response);
      } else {
        alert("kein Token bekommen");
      }
    });
  }

  private setSession(authResult: AuthResponse) {
    localStorage.setItem("id_token", authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    if (!expiration) {
      alert("Expiration not found");
      return 0;
    }
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
