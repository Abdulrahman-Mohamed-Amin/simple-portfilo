import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show1:boolean = true
  show2:boolean = false
  ngOnInit(): void {
    this.change()
  }
  change(){
    setInterval(() => {
      this.show1 = !this.show1
      this.show2 = !this.show2
    }, 2000);
  }
}
