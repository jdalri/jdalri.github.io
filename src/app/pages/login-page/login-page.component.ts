import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private _authService: AuthService, private _router: Router, private _teste: DataService) {}

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ]),
    });

    console.log(this._teste.getDatabaseData());
  }

  onSubmit() {
    console.log('onSubmit()');

    const successfulLogin = this._authService.logIn(this.username.value, this.password.value);

    console.log('onSubmit()', successfulLogin);

    if (successfulLogin)
      this._router.navigateByUrl('/spaces');
  }
}
