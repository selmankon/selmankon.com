import { Component, OnInit } from '@angular/core';

import { TitleChangerService } from '../title-changer.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private titleChangerService:TitleChangerService) {
    titleChangerService.setTitle(
      "about-me"
    )
  }
  ngOnInit(): void {
  }

}
