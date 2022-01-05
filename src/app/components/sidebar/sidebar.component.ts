import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { faSitemap, faCogs, faAngleDown, faAngleLeft, faLightbulb, faListAlt } from '@fortawesome/free-solid-svg-icons';

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
  iconLightbulb = faLightbulb;
  iconListAlt = faListAlt;

  isCollapsed = true;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
}
