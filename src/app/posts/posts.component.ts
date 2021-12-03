import { Component, OnInit } from '@angular/core';

import PostItems from './posts.json';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts:any[] = PostItems;

}
