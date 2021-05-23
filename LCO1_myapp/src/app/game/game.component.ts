import { Component, OnInit } from '@angular/core';
import arrayWords from '../../utils/words';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

  //word counter
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
