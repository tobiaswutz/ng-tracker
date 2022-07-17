import { Component, OnInit, OnDestroy } from '@angular/core'
import { AuthService } from 'src/app/services'
import { takeWhile } from 'rxjs'
import { Router } from '@angular/router'
import { JWTDecoded } from 'src/app/models/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  private alive: boolean = true;

  public userData: JWTDecoded | undefined;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userData = this.authService.userData;
    console.log('userData', this.userData);
    
  }

  ngOnDestroy() {
    this.alive = false
  }

  public manageTheme(event: any): void {
    console.log('manageTheme', event.target.checked);
    const kek = document.getElementById('html')
    if (event.target.checked && kek) {
      kek.setAttribute('data-theme', 'black')
    }
    if (!event.target.checked && kek) {
      kek.setAttribute('data-theme', 'light')
    }
  }

  public logout(): void {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}


