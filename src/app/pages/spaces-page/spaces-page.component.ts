import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { faPlus, faEdit, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {Space} from "../../entities/Space";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-spaces-page',
  templateUrl: './spaces-page.component.html',
  styleUrls: ['./spaces-page.component.css']
})
export class SpacesPageComponent implements OnInit {
  iconPlus = faPlus;
  iconEdit = faEdit;
  iconMenu = faEllipsisV;
  spaceList: Space[] = [];
  showSpinner: boolean = false;

  constructor(
    private _router: Router,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.search('');
  }

  search(searchCriteria: string): void {
    this.showSpinner = true;

    if (searchCriteria != null)
      this.spaceList = this._dataService.getAllSpacesWithCriteria(searchCriteria);
    else
      this.spaceList = this._dataService.getAllSpaces();

    this.showSpinner = false;
  }

  defineCardFooterBackgroundColor(color: string): string {
    return (color === null || color.length === 0)
      ? '#363d47'
      : color;
  }

  navigateToSpaceTopics(space: Space) {
    this._router.navigateByUrl(`/topics/spaceId/${ space.id }`, { state: { space: space } });
  }

  doSearch(searchCriteria: string): void {
    this.search(searchCriteria);
  }
}
