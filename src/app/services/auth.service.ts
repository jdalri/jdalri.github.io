import { Injectable } from '@angular/core';
import {User} from "../entities/User";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: User;
  private username: string = environment.username;
  private password: string = environment.password;

  constructor() {}

  logIn(username: string, password: string): boolean {

    console.log(username + ' | ' + password);

    if (username === this.username && password === this.password) {
      this.loggedInUser = new User(username, password);

      return true;
    }

    return false;
  }

  logOut() {
    this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    console.log('isLoggedIn()', this.loggedInUser);

    return this.loggedInUser != null;
  }
}
