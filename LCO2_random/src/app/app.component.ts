import { Component , OnInit} from '@angular/core';
import { UserService } from './services/user.service';
// import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'random';
  user :any;

  constructor(private userservice : UserService)
  {}

  ngOnInit(){
    this.userservice.getUser().subscribe(
      (user:any) => {
        console.log(user);
        this.user = user.results[0];
      },
      // (err) => {
      //   this.toastr.error(err.status,"oops");
      // }
    );
  }
}
