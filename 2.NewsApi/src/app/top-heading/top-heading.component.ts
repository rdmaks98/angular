import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';
@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private service:NewsServiceService) { }
  topHeadingDisplayData:any=[];

  ngOnInit(): void {
    this.service.topHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplayData = result.articles;
    })
  }

}
