import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  display=false;
  clickVal=[];
  count=1;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.display = !this.display;
    this.clickVal.push(new Date());
  }

  // changeBackgroundColor()
  // {
  //   if(this.clickVal.length>=5)
  //   {
  //     return "blue";
  //   }else{
  //     return 'white';
  //   }
  // }

  // checkColor(){
  //   return (this.clickVal.length>=5)?true:false;
  // }

}
