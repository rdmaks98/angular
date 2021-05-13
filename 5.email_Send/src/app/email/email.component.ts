import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data = {
    to:"",
    Subject:"",
    Message:""
  }
  constructor(private services:EmailService) { }

  ngOnInit(): void {
  }

    doSubmit()
    {
      console.log("try to submit form");
      console.log("data",this.data);

      if(this.data.to == "" || this.data.Subject == "")
      {
        console.log("chek data");
      }
      this.services.sendMail(this.data).subscribe(
        response=>{
          console.log(response);
        },
        error=>{
          console.log(error);
        }
      );
    }
}
