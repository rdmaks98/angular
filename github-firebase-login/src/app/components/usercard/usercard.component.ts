import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { GithbService } from 'src/app/services/githb.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  @Input() 
  user : string | undefined;
  constructor(private ref : ChangeDetectorRef,private githbservice:GithbService) {}

  ngOnInit(): void {
  }

}
