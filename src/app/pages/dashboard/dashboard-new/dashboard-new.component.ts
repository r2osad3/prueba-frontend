import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../../../service/vacancy/vacancy.service';
import { Router } from '@angular/router';
import { Vacancy } from 'src/app/model/vacancy/vacancy';

@Component({
  selector: 'app-dashboard-new',
  templateUrl: './dashboard-new.component.html',
  styleUrls: ['./dashboard-new.component.css']
})
export class DashboardNewComponent implements OnInit {


  jobName  = '';
  company = '';
  modality = '';
  jobDescription = '';
  location = '';


  constructor(
    private vacancyService: VacancyService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const vacancy = new Vacancy(this.jobName, this.company, this.modality, this.jobDescription, this.location);
    this.vacancyService.save(vacancy).subscribe(
      data => {
        alert("creado");
        this.router.navigate(['/lista']);
      },
      err => {
        alert("fallo");
      }
    );
  }



}
