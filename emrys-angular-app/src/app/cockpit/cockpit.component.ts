import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() createServer = new EventEmitter<{name:string,content:string}>();
  @Output() createBluePrint = new EventEmitter<{name:string, content:string}>();
  newServerName:string='';
  newServerContent:string='';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(){
    this.createServer.emit({name:this.newServerName, content:this.newServerContent});
  }

  onAddBluePrint(){
    this.createBluePrint.emit({name:this.newServerName, content:this.newServerContent});
  }



}
