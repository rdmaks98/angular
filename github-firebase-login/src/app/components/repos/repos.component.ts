import { Component, OnInit, Input ,OnChanges,ChangeDetectorRef} from '@angular/core';
import { GithbService } from './../../services/githb.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})

export class ReposComponent implements OnInit {

  @Input()  
  repoUrl: string | undefined;
  repos : any[] = [];
  
  constructor(public githbservice:GithbService,private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngOnChange(): void
  {
    if(this.repoUrl)
    {
      this.githbservice.getRepos(this.repoUrl).subscribe(repos => {
          repos = this.repos;
          this.ref.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

}
