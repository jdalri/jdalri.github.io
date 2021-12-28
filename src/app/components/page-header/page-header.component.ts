import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSearch, faEraser } from '@fortawesome/free-solid-svg-icons';
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() showSearch: boolean = false;
  @Input() showSmallHeader: boolean = false;
  @Input() smallHeaderButtonText: string = '';
  @Input() showGoBackButton: boolean = true;
  @Output('smallHeaderButtonClick') smallHeaderButtonClickedEventEmitter = new EventEmitter<boolean>();
  @Output('smallHeaderGoBackButtonClick') smallHeaderGoBackButtonClickedEventEmitter = new EventEmitter<boolean>();
  @Output('searchButtonClick') searchButtonClickedEventEmitter = new EventEmitter<string>();
  @Output('clearSearchButtonClick') clearSearchButtonClickedEventEmitter = new EventEmitter<boolean>();

  iconSearch = faSearch;
  iconEraser = faEraser;
  searchCriteria: string = '';
  searchHasHappened: boolean = false;

  searchModelSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.searchModelSubject
      .pipe(
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe(searchCriteria => this.searchButtonClickedEventEmitter.emit(searchCriteria) );
  }

  ngOnInit(): void {}

  searchModelChanged(text: string) {
    this.searchModelSubject.next(text);
  }

  smallHeaderButtonClick(): void {
    this.smallHeaderButtonClickedEventEmitter.emit(true);
  }

  smallHeaderGoBackButtonClick() {
    this.smallHeaderGoBackButtonClickedEventEmitter.emit(true);
  }

  searchButtonClick() {
    this.searchHasHappened = true;
    this.searchButtonClickedEventEmitter.emit(this.searchCriteria);
  }

  clearSearchButtonClick() {
    this.searchCriteria = '';
    this.searchHasHappened = false;
    this.clearSearchButtonClickedEventEmitter.emit(false);
  }
}
