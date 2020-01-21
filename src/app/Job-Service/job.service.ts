import { Injectable } from '@angular/core';
import Job from '../models/Job';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  private url = 'http://localhost:8765/interview-service/jobs';
  constructor(private httpServ: HttpClient) { }

  saveJob(job: Job) {
    return this.httpServ.post<boolean>(this.url + '/saveJob', job);
  }

  updateJob(job: Job) {
    return this.httpServ.patch<boolean>(this.url + '/updateJob', job);
  }

  getAllJobs() {
    return this.httpServ.get<Job[]>(this.url + '/allJobs');
  }

  getAllJobAtPage(page: number) {
    return this.httpServ.get<Job[]>(this.url + '/allJobs/' + page);
  }

  getByTitle(title: string) {
    return this.httpServ.get<Job>(this.url + '/jobTitle/' + title);
  }

  getByTitlePaged(title: string, page: number) {
    return this.httpServ.get<Job>(this.url + '/jobTitle/' + title + '/' + page);
  }

}