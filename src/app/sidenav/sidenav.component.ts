import { Component, OnInit } from '@angular/core';
import { jqueryclass } from '../shared/jquery.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  constructor( private jquery:jqueryclass) { }

  ngOnInit() {
    this.jquery.initialfuncion();
  }

}
