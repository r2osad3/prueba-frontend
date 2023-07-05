import { Component, OnInit } from '@angular/core';
import { VacancyService } from 'src/app/service/vacancy/vacancy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacancy } from '../../../model/vacancy/vacancy';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {

  vacancy: Vacancy | null = null;

  constructor(
    private vacancyService: VacancyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  volver(): void {
    this.router.navigate(['/lista']);
  }






}
