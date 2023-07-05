import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/service/vacancy/vacancy.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../../../service/token/token.service';
import { Vacancy } from 'src/app/model/vacancy/vacancy';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent  implements OnInit{

  vacancies: Vacancy[] = [];
  roles: string[];
  isAdmin = false;
  isLogged = false;

  constructor(
    private vacancyService: VacancyService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.roles = this.tokenService.getAuthorities();
    this.isAdmin = this.roles.includes('ROLE_ADMIN');
   }

   ngOnInit() {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
      this.navigateToLogin();
    }

    this.cargarVacantes();
    this.roles = this.tokenService.getAuthorities();
    console.log(this.roles)
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
        console.log("es admin");
      }
    });
  }

  cargarVacantes(): void {
    this.vacancyService.lista().subscribe(
      data => {
        console.log('Respuesta del servidor:', data);
        this.vacancies = data;
        console.log('Vacantes cargadas:', this.vacancies);
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.vacancyService.delete(id).subscribe(
      data => {
        this.toastr.success('Vacante Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarVacantes();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  buscar(): void {

  }

  private navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
