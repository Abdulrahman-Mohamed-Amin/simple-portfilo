import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  hide:boolean = false
  hide1:boolean = false
  hide2:boolean = false

  showMore(){
    this.hide = !this.hide
  }
  showMore1(){
    this.hide1 = !this.hide1
  }
  showMore2(){
    this.hide2 = !this.hide2
  }
}
