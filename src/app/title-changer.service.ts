import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TitleChangerService {

  constructor(private titleService: Title, private mainComponent:AppComponent) {}

  setTitle(path: string) {
    let author = this.mainComponent.author;
    this.titleService.setTitle(author +"/"+ path);
  }
}
