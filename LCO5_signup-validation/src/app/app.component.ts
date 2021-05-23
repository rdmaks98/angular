import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Password } from "./custom-validator/password";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-validation';
  registerForm : any = FormGroup;
  submitted = false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["",[Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      acceptTandC: [false, Validators.requiredTrue]
    },{
      Validators:Password('password','confirmPassword')
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    console.table(this.registerForm.value);
    console.log(this.registerForm);

    alert("success sign" + JSON.stringify(this.registerForm.value));
  }

    get r()
    {
    return this.registerForm.controls;
    }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}