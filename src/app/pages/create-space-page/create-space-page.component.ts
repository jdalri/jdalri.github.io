import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Space } from "../../entities/Space";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-create-space-page',
  templateUrl: './create-space-page.component.html',
  styleUrls: ['./create-space-page.component.css']
})
export class CreateSpacePageComponent implements OnInit {
  pageTitle: string = 'Create new Topic';
  spaceForm: FormGroup;
  newSpace: Space;

  get name() { return this.spaceForm.get('name'); }
  get description() { return this.spaceForm.get('description'); }

  constructor(
    private _router: Router,
    private _dataService: DataService
  ) { }

  ngOnInit(): void {
    this.spaceForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      description: new FormControl(),
    });
  }

  onSubmit() {
    if (this.spaceForm.invalid) {
      this.spaceForm.markAllAsTouched();
      return;
    }

    this.newSpace = this.spaceForm.value;
  }

  cancel() {
    this._router.navigateByUrl('/spaces');
  }
}
