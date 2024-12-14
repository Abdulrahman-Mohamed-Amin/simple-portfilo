import { Component } from '@angular/core';
import { User } from './user';
import { HtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ishiddin:boolean = false

  showMenu(){
    this.ishiddin = !this.ishiddin
  }
}