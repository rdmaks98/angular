import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items : any [];
  constructor(public service :ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getJson().subscribe(resp=>{
      this.items= resp;
    })
  }

}
