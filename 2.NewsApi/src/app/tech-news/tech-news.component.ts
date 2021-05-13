import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private service:NewsServiceService) { }

  techNews:any=[];

  ngOnInit(): void {
    this.service.topHeading().subscribe((result)=>{
      // console.log(result);
      this.techNews = result.articles;
    })
  }

}
