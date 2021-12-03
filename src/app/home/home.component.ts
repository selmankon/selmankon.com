import { Component, OnInit } from '@angular/core';

import { TitleChangerService } from '../title-changer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleChangerService:TitleChangerService) {
    titleChangerService.setTitle(
      "home"
    )
  }

  ngOnInit(): void {
  }

}
