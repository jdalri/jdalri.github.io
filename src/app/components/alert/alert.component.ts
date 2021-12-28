import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() text: string = '';
  @Input() alertClass: string = 'alert-primary';

  constructor() {}

  ngOnInit(): void {}

  buildCssClasses(): string {
    return 'alert custom-alert ' + this.alertClass;
  }
}
