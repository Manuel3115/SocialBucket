import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  constructor() { }

  channelsList: string[] = ["chat", "chien"];
  messageHistory : string[] = ["message"];
  userList : string[]=[];



  ngOnInit(): void {
    for(var i:number =0; i < 20; i++){
      this.messageHistory.push("message");
      this.messageHistory.push("message");
      this.userList.push("user");
    }

  }

  updateTab(index:number):void {
    this.messageHistory=[];
    var selectedIndex = index;
    console.log(selectedIndex);
  }

}

