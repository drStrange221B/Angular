import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() createServer = new EventEmitter<{name:string,content:string}>();
  @Output('bpCreated') createBluePrint = new EventEmitter<{name:string, content:string}>();
  // newServerName:string='';
  newServerContent:string='';

  // value can be also extracted or pass using @ViewChild()

  @ViewChild('serverComponent',{static:true}) newViewChildServer:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  // onAddServer(){
  //   this.createServer.emit({name:this.newServerName, content:this.newServerContent});
  // }

  // onAddServer(serverComponent:HTMLInputElement){
  //   this.createServer.emit({name:serverComponent.value, content:this.newServerContent});
  // }

  // onAddBluePrint(serverComponent:HTMLInputElement){
  //   this.createBluePrint.emit({name:serverComponent.value, content:this.newServerContent});
  // }

  onAddServer(){
    this.createServer.emit({name:this.newViewChildServer.nativeElement.value, content:this.newServerContent});
  }

  onAddBluePrint(serverComponent:HTMLInputElement){
    this.createBluePrint.emit({name:this.newViewChildServer.nativeElement.value, content:this.newServerContent});
  }



}
