import { Component, OnInit } from '@angular/core';

import { TitleChangerService } from '../title-changer.service';

import ProjectItems from './projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private titleChangerService:TitleChangerService) {
    titleChangerService.setTitle(
      "projects"
    )
  }

  ngOnInit(): void {
  }

  projects:any[] = ProjectItems;

}
