import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { faSitemap, faCogs, faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  iconSiteMap = faSitemap;
  iconCogs = faCogs;
  iconAngleDown = faAngleDown;
  iconAngleUp = faAngleLeft;

  isCollapsed = true;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    console.log(this._router.url);
  }
}
