import { Component } from '@angular/core';
import { ServerElement } from './server-element/server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type:'server',name: 'Testserver', content:'Just a test!'}];


  onCreateServer(serverData:{name:string, content:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.name,
      content:serverData.content

    });



  }

  onCreateBluePrint(bluePrintData:{name:string, content:string}){

    this.serverElements.push({
      type:"blueprint",
      name:bluePrintData.name,
      content:bluePrintData.content
    });

  }

}
