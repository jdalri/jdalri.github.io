import { Component, OnInit } from '@angular/core';
import {Knowledge} from "../../entities/Knowledge";
import {Topic} from "../../entities/Topic";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {Space} from "../../entities/Space";

@Component({
  selector: 'app-knowledge-page',
  templateUrl: './knowledge-page.component.html',
  styleUrls: ['./knowledge-page.component.css']
})
export class KnowledgePageComponent implements OnInit {
  topicId: number;
  topic: Topic;
  space: Space;
  title: string = '';
  showSpinner: boolean = false;
  knowledgeList: Knowledge[] = [];

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit(): void {
    if (history.state.topic === undefined) {
      this._router.navigateByUrl('/spaces');
    }
    else {
      this.topicId = parseInt(this._activatedRoute.snapshot.paramMap.get('topicId'));

      if (history.state.topic !== undefined) {
        this.topic = history.state.topic;
        this.space = history.state.state;
      }

      this.title = `Knowledges for topic ${ this.topic.name }`;

      this.getAllTopicsKnowledges();
    }
  }

  getAllTopicsKnowledges() {
    this.showSpinner = true;

    this.knowledgeList = this._dataService.getAllKnowledgeFromTopic(this.topicId);

    this.showSpinner = false;
  }

  /***
   * When the user clicks on a link on the summary, the page will scroll to show the knowledge
   *
   * @param event
   * @param knowledgeId
   */
  scrollToView(event, knowledgeId) {
    event.preventDefault();

    let element = document.getElementById('knowledge_' + knowledgeId);
    const yOffset = -90;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }

  expandAll() { this.knowledgeList.forEach( knowledge => knowledge.isCollapsed = true ); }

  collapseAll() { this.knowledgeList.forEach( knowledge => knowledge.isCollapsed = false ); }

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack() {
    this._router.navigateByUrl(`/topics/spaceId/${ this.space.id }`, { state: { space: this.space } });
  }
}
