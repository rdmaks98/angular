import { Component } from '@angular/core';
import arrayWords from '../utils/words';
@Component({
  selector: 'app-root',
  // PRINT TAG 
  // template:`<h1> PRINTING LINE USING TEMPLATE LITERAL</h1>`,
  // design css is here
  styles : [`
  u
  {
    font-size:18px;
    color:red;
  }`], 
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  addname = "hello ng";
  // MAKE INTEPOLUTION

}
