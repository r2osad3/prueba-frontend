export class Vacancy {
  id?: number;
  jobName:string;
  company:string;
  modality:string;
  jobDescription:string;
  location: string;

  constructor(jobName: string, company: string, modality: string, jobDescription: string, location: string) {
    this.jobName = jobName;
    this.company = company;
    this.modality = modality;
    this.jobDescription = jobDescription;
    this.location = location;
  }


}
