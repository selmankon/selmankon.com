import { Component, OnInit } from '@angular/core';
import { TitleChangerService } from '../title-changer.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor(private titleChangerService:TitleChangerService) {
    titleChangerService.setTitle(
      "contact-me"
    )
  }

  ngOnInit(): void {}

}
