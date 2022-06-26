import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public manageTheme(event: any): void {
    console.log('manageTheme', event.target.checked)
    const kek = document.getElementById('html')
    if (event.target.checked && kek) {
      kek.setAttribute('data-theme', 'black')
    }
    if (!event.target.checked && kek) {
      kek.setAttribute('data-theme', 'light')
    }
  }
}

// document.querySelector('html').setAttribute('data-theme', 'cupcake')
