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

  constructor() {
    let storedUser: User = JSON.parse(localStorage.getItem('loggedUser'));

    if (storedUser != null && new Date(storedUser.createDate).getDate() < new Date().getDate())
      localStorage.clear();
  }

  logIn(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      this.loggedInUser = new User(username, password);

      localStorage.setItem('loggedUser', JSON.stringify(this.loggedInUser));

      return true;
    }

    return false;
  }

  logOut() {
    this.loggedInUser = null;
  }

  isLoggedIn(): boolean {
    let storedUser = JSON.parse(localStorage.getItem('loggedUser'));

    return this.loggedInUser != null || storedUser != null;
  }
}
