import { Component, OnInit } from '@angular/core';
import { NewUser } from '../../model/new-user/new-user';
import { TokenService } from '../../service/token/token.service';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser: NewUser;
  name: string;
  userName: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.newUser = new NewUser('', '', '','');
    this.name='';
    this.password='';
    this.email='';
    this.userName='';
    this.errMsj='';
   }
   ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {

    this.newUser = new NewUser(this.name, this.userName, this.email, this.password);
    this.authService.nuevo(this.newUser).subscribe(
      data => {
        console.log("creo");
        alert("Cuenta Creada', 'OK");

        this.router.navigate(['/login']);
      },
      err => {

        this.errMsj = err.error.mensaje;
        alert("fallo al crear la cuenta");
        console.log(err.error);


      }
    );
  }

}
