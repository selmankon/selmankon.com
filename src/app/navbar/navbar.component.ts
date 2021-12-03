import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import NavbarItems from './navbar.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  constructor(
    private http:HttpClient
  ) { }

  navbarItems:any[] = NavbarItems;

  ngOnInit(): void {  }
}
