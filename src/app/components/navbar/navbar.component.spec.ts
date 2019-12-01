import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatCardModule, MatFormFieldModule, MatCheckboxModule, MatOptionModule, MatAutocompleteModule, MatDatepickerModule, MatSlideToggleModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';
import { ProjectHubComponent } from 'src/app/project-hub/project-hub.component';
import { JobFormComponent } from '../job-form/job-form.component';
import { InterviewFormComponent } from '../interview-form/interview-form.component';
import { ProfileFormComponent } from '../profile-form/profile-form.component';
import { LandingComponent } from 'src/app/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from '../logout/logout.component';
import { ViewJobsComponent } from 'src/app/view-jobs/view-jobs.component';
import { ViewInterviewsComponent } from 'src/app/view-interviews/view-interviews.component';
import { ViewProfilesComponent } from 'src/app/view-profiles/view-profiles.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent, LoginComponent, LogoutComponent, ViewProfilesComponent, ViewJobsComponent, ViewInterviewsComponent, ProjectHubComponent, JobFormComponent, InterviewFormComponent, ProfileFormComponent, LandingComponent ],
      imports: [BrowserAnimationsModule,MatToolbarModule, AppRoutingModule, MatSidenavModule, MatFormFieldModule, MatListModule, MatCardModule, FormsModule, MatCheckboxModule, MatOptionModule, MatAutocompleteModule, MatDatepickerModule, ReactiveFormsModule, MatSlideToggleModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
