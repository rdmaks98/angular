import { Component, OnInit, Input ,OnChanges,ChangeDetectorRef} from '@angular/core';
import { GithbService } from './../../services/githb.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})

export class ReposComponent implements OnInit {

  @Input() repoUrl:string;
  repos = [];
  
  constructor(public githbservice:GithbService,private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngOnChange(): void
  {
    if(this.repoUrl)
    {
      this.githbservice.getRepos(this.repoUrl).subscribe(
        (repos: []) => {
          this.repos = repos;
        }
      )
    }
  }

}
