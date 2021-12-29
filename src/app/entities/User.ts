export class User {
  username: string;
  password: string;
  createDate: Date;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.createDate = new Date();
  }
}
