import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../../../service/vacancy/vacancy.service';
import { Vacancy } from 'src/app/model/vacancy/vacancy';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-upd',
  templateUrl: './dashboard-upd.component.html',
  styleUrls: ['./dashboard-upd.component.css']
})
export class DashboardUpdComponent implements OnInit {

  vacancy: Vacancy | null = null;

  constructor(
    private vacancyService: VacancyService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }


  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.vacancyService.detail(id).subscribe(
      data => {
        this.vacancy = data;
      },
      err => {
        alert("Falló");
        this.volver();


      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (this.vacancy) {
      this.vacancyService.update(id, this.vacancy).subscribe(
        data => {
          alert("vacante actualizado");
          this.volver();
        },
        err => {
          alert("Fallo");
        }
      );
    } else {
      // Handle the case when vacancy is null
      alert("No se encontró la vacante");
    }
  }



  volver(): void {
    this.router.navigate(['/lista']);
  }
}
