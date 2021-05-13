import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.css']
})
export class NavbarsComponent implements OnInit {
  title = "Email Gui";
  
  constructor() { }

  ngOnInit(): void {
  }

}
