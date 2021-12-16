import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { GithbService } from '../../services/githb.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }


}
