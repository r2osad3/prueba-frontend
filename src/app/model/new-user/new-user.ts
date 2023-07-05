export class NewUser {

  name:string;
  userName: string;
  email: string;
  password:string;
  roles:[String];

  constructor(name: string, userName: string, email: string, password: string) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.roles = ["admin"];
}
}
