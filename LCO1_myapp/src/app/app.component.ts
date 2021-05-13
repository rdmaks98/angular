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

  // MAKE INTEPOLUTION
  title = 'myapp';
  addname = "hello ng";

  // COUNTER APP USING FAT ARROW FUNCTION
  count: number = 0;
  handleincrease = () => {
    this.count = this.count+1;
  }
  handledecrease = () => {
    this.count = this.count-1;
    if(this.count === -1)
    {
      this.count = this.count+1;
    }
  }

  handleReset = () => {
    this.count = 0 ;
  }

  second = "word_counter";
  words = '';
  limits = 10;

  handleSlideChange(newlimits : number)
  {
    this.limits = newlimits;
  }

  generate = () => {
    this.words = arrayWords.slice(0,this.limits).join('');
  }

}
