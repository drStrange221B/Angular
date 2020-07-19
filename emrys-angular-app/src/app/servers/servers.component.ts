import { Component, OnInit } from '@angular/core';
// import { Console } from 'console';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit { 

  servers=['server1','server2'];

  serverValue='Server has not yet been created';

  stateOfButton = false;

  inputValue="";

  check = false;

  constructor() { 

    setTimeout(()=>{
      this.check= true;

    },2000);

  }

  ngOnInit() {
  }

  onCreateServer(){
      this.stateOfButton = true;
      this.serverValue="Server has been created !";
      this.servers.push('server'+ (this.servers.length + 1));
      // console.log("there is a cheked " + this.stateOfButton);
  }

  onInput(event:Event){
    this.inputValue= (<HTMLInputElement>event.target).value;
  }

}
