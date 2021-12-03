import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentRoute!: string;
  author:string = "LIIIs4ma";

  constructor(private router: Router) {
    if (router.url == "/") {
      this.currentRoute = "/home";
    }
    else if (router.url.includes("?")) {
      this.currentRoute = router.url.slice(0,router.url.indexOf("?"));
    }
    else {
      this.currentRoute = router.url;
    }
  }

  ngOnInit(): void {
  }

  escapeHtml(unsafe:string){
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
  }

}
