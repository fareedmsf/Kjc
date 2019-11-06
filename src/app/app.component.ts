import { Component ,OnInit} from '@angular/core';
import { jqueryclass } from './shared/jquery.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor( private jquery:jqueryclass, private router:Router) { }

  ngOnInit() {
    this.jquery.initialfuncion();
    console.log(this.router.url);
  }

  ngOnChanges(){
    this.jquery.initialfuncion();
  }

  title = 'KJC NACC';
}
