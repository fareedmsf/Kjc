import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page112',
  templateUrl: './page112.component.html',
  styleUrls: ['./page112.component.css']
})
export class Page112Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }

}
