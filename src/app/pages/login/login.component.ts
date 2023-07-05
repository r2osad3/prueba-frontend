import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
import { LoginUser } from '../../model/login-user/login-user';
import { TokenService } from '../../service/token/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ToastrService]
})
export class LoginComponent {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUser;
  userName: string;
  password: string;
  roles: string[] = [];
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginUsuario = new LoginUser('', '');
    this.userName = '';
    this.password = '';
    this.errMsj = '';
  }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      console.log(this.roles);
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUser(this.userName, this.password);

    this.authService.login(this.loginUsuario).subscribe(


      data => {
        if (data) {
        this.isLogged = true;
        console.log("entro");
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/lista']);
        }else{
          this.router.navigate(['/login']);
        }

      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        console.log(err);
      }
    );
  }
}
