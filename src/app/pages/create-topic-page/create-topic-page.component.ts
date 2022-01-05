import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Topic} from "../../entities/Topic";
import {Space} from "../../entities/Space";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-create-topic-page',
  templateUrl: './create-topic-page.component.html',
  styleUrls: ['./create-topic-page.component.css']
})
export class CreateTopicPageComponent implements OnInit {
  pageTitle: string = 'Create new Topic';
  topicForm: FormGroup;
  spacesList: Space[];
  newTopic: Topic;

  get name() { return this.topicForm.get('name'); }
  get description() { return this.topicForm.get('description'); }
  get spaceId() { return this.topicForm.get('spaceId'); }

  constructor(
    private _router: Router,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.topicForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      description: new FormControl(),
      spaceId: new FormControl('', [ Validators.required ])
    });

    this.spacesList = this._dataService.getAllSpaces();
  }

  onSubmit() {
    if (this.topicForm.invalid) {
      this.topicForm.markAllAsTouched();
      return;
    }

    this.newTopic = this.topicForm.value;
  }

  changedSpace(event) {
    this.spaceId.setValue(event.target.value, { onlySelf: true })
  }

  cancel() {
    this._router.navigateByUrl('/spaces');
  }
}
