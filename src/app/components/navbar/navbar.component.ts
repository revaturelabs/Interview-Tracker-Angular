
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavbarservService } from '../../services/navbarserv.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {

  constructor(public nav: NavbarservService) { }

  ngOnInit() {
    this.nav.show();
  }

  @ViewChild('sidenav', {static: false}) navbar: MatSidenav;


}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
