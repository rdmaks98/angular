import { Component ,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // registerForm : FormGroup;
  // submitted = false;

  constructor(private Formbuilder : FormBuilder){}

  ngOnInit(){
    // this.registerForm = this.Formbuilder.group({
    //   firstName : ['', Validators.required,Validators.minLength(3)],
    //   lastName : ['',Validators.required],
    //   email : ['',Validators.required,Validators.email],
    //   password: ['',Validators.required],
    //   confirmpassword : ['',Validators.required],
    //   acceptTandC : [false,Validators.requiredTrue], 
    // })
  }

  // onSubmit()
  // {
  //   this.submitted = false;
  //   if(this.registerForm.invalid)
  //   {
  //     return;
  //   }
  //   console.table(this.registerForm.value);
  //   console.table(this.registerForm);
  //   alert("Success \n "+ JSON.stringify(this.registerForm.value));

  // }

  // onReset()
  // {
  //   this.submitted = false;
  //   this.registerForm.reset();
  // }
}

