import {AfterViewChecked, Component, Inject, Input, OnInit} from '@angular/core';
import * as CustomCkEditor5 from 'src/ckeditor5_custom/build/ckeditor';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-knowledge-content-display',
  templateUrl: './knowledge-content-display.component.html',
  styleUrls: ['./knowledge-content-display.component.css']
})
export class KnowledgeContentDisplayComponent implements AfterViewChecked {
  @Input() editorData;
  ckEditor = CustomCkEditor5;
  disabled: boolean = true;

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) { }

  ngAfterViewChecked(): void {
    let ckeditorToolbar = this._document.querySelector('.ck-editor__top');
    let ckeditorContentDiv = this._document.querySelectorAll('.ck-content');

    if (ckeditorToolbar !== null)
      ckeditorToolbar.remove();

    if (ckeditorContentDiv !== null && ckeditorContentDiv.length > 0) {
      ckeditorContentDiv.forEach(
        element => (element as HTMLElement).style.border = 'none'
      );
    }
  }
}
