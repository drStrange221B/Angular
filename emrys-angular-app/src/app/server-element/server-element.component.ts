import { Component, OnInit, Input } from '@angular/core';
import { ServerElement } from "./server-element.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
//  @Input() element:{name:string, type:string, content:string};

  @Input('srvElement') element:ServerElement;


  constructor() { }

  ngOnInit() {
  }

}
