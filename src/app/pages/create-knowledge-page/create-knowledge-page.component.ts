import { Component, Inject, OnInit } from '@angular/core';
import * as CustomCkEditor5 from 'src/ckeditor5_custom/build/ckeditor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'
import {Topic} from "../../entities/Topic";
import {DataService} from "../../services/data.service";
import {Knowledge} from "../../entities/Knowledge";

@Component({
  selector: 'app-create-knowledge-page',
  templateUrl: './create-knowledge-page.component.html',
  styleUrls: ['./create-knowledge-page.component.css']
})
export class CreateKnowledgePageComponent implements OnInit {
  pageTitle: string = 'Create new Knowledge';
  knowledgeForm: FormGroup;
  ckEditor = CustomCkEditor5;
  topicsList: Topic[];
  newKnowledge: Knowledge;

  get title() { return this.knowledgeForm.get('title'); }
  get shortTitle() { return this.knowledgeForm.get('shortTitle'); }
  get content() { return this.knowledgeForm.get('content'); }
  get topicId() { return this.knowledgeForm.get('topicId'); }

  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private _document: HTMLDocument,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.knowledgeForm = new FormGroup({
      title: new FormControl('', [ Validators.required ]),
      shortTitle: new FormControl('', [ Validators.required ]),
      content: new FormControl('', [ Validators.required ]),
      topicId: new FormControl('', [ Validators.required ]),
    });

    this.topicsList = this._dataService.getAllTopics();
  }

  ngAfterViewChecked(): void {
    let ckeditorBalloonPanel = this._document.querySelector('.ck-balloon-panel');

    if (ckeditorBalloonPanel !== null)
      (ckeditorBalloonPanel as HTMLElement).style.zIndex = '2000';
  }

  onSubmit() {
    if (this.knowledgeForm.invalid && this.content.value === '') {
      this.content.setErrors({ 'required': true });
      this.knowledgeForm.markAllAsTouched();
      return;
    }

    this.newKnowledge = this.knowledgeForm.value;
  }

  changedTopic(event) {
    this.topicId.setValue(event.target.value, { onlySelf: true })
  }

  cancel() {
    this._router.navigateByUrl('/spaces');
  }
}
