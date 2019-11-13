import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { InsideComponent } from './inside/inside.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    InsideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
