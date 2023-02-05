import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { AccountSocketService } from '../services/account-socket.service';
import { ChatSocketService } from '../services/chat-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  constructor(chatService:ChatSocketService, accountService: AccountSocketService) {
    this.chatService=chatService;
    this.accountService=accountService;
   }

  chatService:ChatSocketService;
  accountService:AccountSocketService;
  channelList: Channel[] = [];
  tabSelected:number = 0;
  message : string = "";

  ngOnInit(): void {
    this.chatService.setMessageListener(this.receiveMesssage);
    this.accountService.getBucketList(bucketList: {name : string, isDone: boolean}[])
  }

  getChannels()

  receiveMesssage(message: string, username:string, bucketName: string):void 
  {
    let time = new Date;
    for(let channel of this.channelList){
      if(channel.name=bucketName)
        channel.messageHistory.push(time.toUTCString()+username+message);
    }
  }

  updateTab(index:number):void {
    this.tabSelected = index;
    console.log(this.tabSelected);
  }

  sendMessage(message:string):void {
    this.chatService.sendMessage(message, this.channelList[this.tabSelected].name, this.pushMessageToBoard);
  }

  pushMessageToBoard():void
  {
    let time = new Date;
    this.channelList[this.tabSelected].messageHistory.push(time.toUTCString+this.message);
    this.message="";
  }

}

interface Channel{
  name :string
  messageHistory: string[]
  userList: string[]
}

interface BucketList{
  name:string
  isDone:boolean
}
