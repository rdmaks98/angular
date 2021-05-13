import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "All course";
  constructor() { }

  ngOnInit(): void {

  }

  course=[
    {
      'id':1,
      'name':"Angular",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      'image':"../../assets/p1.jpg",
    },
    {
      'id':2,
      'name':"Node",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      'image':"../../assets/p2.jpg",
    },
    {
      'id':1,
      'name':"React",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      'image':"../../assets/p3.jpg",
    },
    {
      'id':4,
      'name':"javascript",
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      'image':"../../assets/p4.jpg",
    },

  ]

}
