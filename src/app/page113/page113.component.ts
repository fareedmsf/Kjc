import { Component, OnInit } from '@angular/core';
import { jqueryclass } from '../shared/jquery.service';

@Component({
  selector: 'app-page113',
  templateUrl: './page113.component.html',
  styleUrls: ['./page113.component.css']
})
export class Page113Component implements OnInit {

  constructor(private jquery:jqueryclass) { }

  ngOnInit() {
    this.jquery.initialfuncion();
  }

}
