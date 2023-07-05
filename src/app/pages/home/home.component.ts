import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogged = false;
  userName = '';

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;

      const token = this.tokenService.getToken();
      if (token) {
        this.userName = this.tokenService.getUserName();
        console.log(this.tokenService.getUserName());
      } else {
        console.log(token);
      }

    } else {
      this.isLogged = false;
      this.userName = '';
    }
  }

}
