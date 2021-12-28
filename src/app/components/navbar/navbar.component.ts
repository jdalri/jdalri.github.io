import { Component, OnInit } from '@angular/core';
import { faBell, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  iconBell = faBell;
  iconEnvelope = faEnvelope;
  iconMenu = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
