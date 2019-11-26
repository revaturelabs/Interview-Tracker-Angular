import { Component, OnInit } from '@angular/core';
import { NavbarservService } from '../../services/navbarserv.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface User {
  firstName: any;
}
export interface Job {
  title: any;
}

@Component({
  selector: 'app-interview-form',
  templateUrl: './interview-form.component.html',
  styleUrls: ['./interview-form.component.scss']
})
export class InterviewFormComponent implements OnInit {
  myControl = new FormControl();
  jobControl = new FormControl();

  options: User[] = [];
  jobOptions: Job[] = [];
  profiles: any;
  jobs: any;
  filteredOptions: Observable<User[]>;
  filteredJobOptions: Observable<Job[]>;
  constructor( public nav: NavbarservService, private http: HttpClient) { }

  ngOnInit() {
    this.nav.show();

    this.http.get(environment.main_url + 'profiles/allProfiles').toPromise().then(r => {
      this.profiles = r;
      console.log(this.profiles);
      for (let p of this.profiles) {
        this.options.push({firstName: p.firstName});
        console.log(this.options);
      }
    });

    this.http.get(environment.main_url + 'jobs/allJobs').toPromise().then(s => {
      this.jobs = s;
      console.log(this.jobs);
      for (let j of this.jobs) {
        this.jobOptions.push({title: j.title});
      }
      console.log(this.jobOptions);
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.firstName),
        map(firstName => firstName ? this._filter(firstName) : this.options.slice())
      );

    this.filteredJobOptions = this.jobControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.title),
        map(title => title ? this._jobfilter(title) : this.jobOptions.slice())
      );

  }

  displayFn(user?: User): string | undefined {
    return user ? user.firstName : undefined;
  }

  displayJ(job?: Job): string | undefined {
    return job ? job.title : undefined;
  }

  private _filter(firstName: string): User[] {
    const filterValue = firstName.toLowerCase();

    return this.options.filter(option => option.firstName.toLowerCase().indexOf(filterValue) === 0);
  }

  private _jobfilter(title: string): Job[] {
    const jobFilterValue = title.toLowerCase();

    return this.jobOptions.filter(jobOption => jobOption.title.toLowerCase().indexOf(jobFilterValue) === 0);
  }

   }




