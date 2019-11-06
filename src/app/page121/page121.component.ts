import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page121',
  templateUrl: './page121.component.html',
  styleUrls: ['./page121.component.css']
})
export class Page121Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pdf1(){
    window.open("../assets/test.pdf",'_blank');
  }

}
