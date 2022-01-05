import { Component, OnInit } from '@angular/core';
import { faPlus, faChevronCircleDown, faEllipsisV, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import {Topic} from "../../entities/Topic";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Space} from "../../entities/Space";

@Component({
  selector: 'app-topics-page',
  templateUrl: './topics-page.component.html',
  styleUrls: ['./topics-page.component.css']
})
export class TopicsPageComponent implements OnInit {
  iconPlus = faPlus;
  iconChevronDown = faChevronCircleDown;
  iconMenu = faEllipsisV;
  iconAngleDoubleLeft = faAngleDoubleLeft;

  showSpinner: boolean = true;
  topicList: Topic[] = [];
  spaceId: number = null;
  space: Space;

  constructor(private _router: Router, private _dataService: DataService) {}

  ngOnInit(): void {
    if (history.state.space === undefined) {
      this._router.navigateByUrl('/spaces');
    }
    else {
      this.space = history.state.space;
      this.search('');
    }
  }

  search(searchCriteria): void {
    this.showSpinner = true;

    if (searchCriteria != null)
      this.topicList = this._dataService.getAllTopicsWithCriteria(this.space.id, searchCriteria);
    else
      this.topicList = this._dataService.getAllTopicsFromSpace(this.space.id);

    this.showSpinner = false;
  }

  goToKnowledgePage(topic: Topic) {
    this.showSpinner = true;

    this._router.navigateByUrl(`knowledges/topicId/${ topic.id }`, { state: { topic: topic, space: this.space } });
  }

  goBack() {
    this._router.navigateByUrl('/spaces');
  }

  toggleCollapsiblePanel(topic: Topic): void {
    if (topic.description === '' || topic.description === null)
      return;

    topic.isCollapsed = !topic.isCollapsed;
  }

  doSearch(searchCriteria: string): void {
    this.search(searchCriteria);
  }
}
