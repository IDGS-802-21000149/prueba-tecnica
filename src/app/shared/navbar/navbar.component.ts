import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})
export class NavbarComponent implements OnInit {
  menuItems: any[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Users', icon: 'pi pi-users', routerLink: '/users' },
      { label: 'Orders', icon: 'pi pi-shopping-cart', routerLink: '/orders' },
    ];
  }
}
