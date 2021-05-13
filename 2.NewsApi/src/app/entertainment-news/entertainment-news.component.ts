import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  
  constructor(private service:NewsServiceService) { }

  entertainementNews:any=[];
  ngOnInit(): void {
    this.service.topHeading().subscribe((result)=>{
      // console.log(result);
      this.entertainementNews = result.articles;
    })
  }

}
