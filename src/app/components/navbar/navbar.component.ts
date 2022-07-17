import { Component, OnInit, OnDestroy } from '@angular/core'
import { AuthService } from 'src/app/services'
import { takeWhile } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  
  public loggedIn: boolean = false
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.loggedIn.subscribe(
      (loggedIn: boolean) => {
        this.loggedIn = loggedIn
        console.log('loggedIn', loggedIn);
      }
    )
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


