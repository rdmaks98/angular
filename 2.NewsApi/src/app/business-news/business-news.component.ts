import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private service:NewsServiceService) { }
  businessNews:any=[];
  
  ngOnInit(): void {
    this.service.topHeading().subscribe((result)=>{
      // console.log(result);
      this.businessNews = result.articles;
    })
  }

}
