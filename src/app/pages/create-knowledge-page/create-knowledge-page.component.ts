import { Component, Inject, OnInit } from '@angular/core';
import * as CustomCkEditor5 from 'src/ckeditor5_custom/build/ckeditor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-create-knowledge-page',
  templateUrl: './create-knowledge-page.component.html',
  styleUrls: ['./create-knowledge-page.component.css']
})
export class CreateKnowledgePageComponent implements OnInit {
  pageTitle: string = 'Create new knowledge';
  knowledgeForm: FormGroup;
  ckEditor = CustomCkEditor5;

  get title() { return this.knowledgeForm.get('title'); }
  get shortTitle() { return this.knowledgeForm.get('shortTitle'); }
  get content() { return this.knowledgeForm.get('content'); }

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private _document: HTMLDocument
  ) { }

  ngOnInit(): void {
    this.knowledgeForm = new FormGroup({
      title: new FormControl('', [ Validators.required ]),
      shortTitle: new FormControl('', [ Validators.required ]),
      content: new FormControl('', [ Validators.required ]),
    });
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

    console.log(this.knowledgeForm.value);
  }

  cancel() {
    this._router.navigateByUrl('/spaces');
  }
}
