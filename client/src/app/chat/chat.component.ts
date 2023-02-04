import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  constructor() { }
  channelList: Channel[] = [];
  tabSelected:number = 0;

  ngOnInit(): void {
    this.channelList.push({name:"chat", messageHistory:[], userList:[]})
    this.channelList.push({name:"chien", messageHistory:[], userList:[]})
    for(var i:number =0; i < 20; i++){
      this.channelList[0].messageHistory.push("message");
      this.channelList[0].userList.push("user");
    }

  }

  updateTab(index:number):void {
    this.tabSelected = index;
    console.log(this.tabSelected);
  }

}

interface Channel{
  name :string
  messageHistory: string[];
  userList: string[]
}

