export class JwtDto {

  token: string;
  type: string;
  userName: string;
  authorities: string[];

  constructor() {
    this.token = '';
    this.type = '';
    this.userName = '';
    this.authorities = [];
  }

}
