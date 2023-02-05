import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { AccountSocketService } from '../services/account-socket.service';
import { AccountService } from '../services/account.service';
import { ChatSocketService } from '../services/chat-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  constructor(private chatService:ChatSocketService, private accountSocketService: AccountSocketService, private accountService: AccountService, private router: Router) {}

  channelList: Channel[] = [];
  tabSelected:number = 0;
  message : string = "";

  ngOnInit(): void {
    if(!this.accountService.account.username) this.router.navigate(['log-in']);
    this.chatService.setMessageListener(this.receiveMesssage.bind(this));
    this.accountSocketService.getBucketList(this.getChannels.bind(this));
  }

  getChannels(bucketList: BucketList[]){
    for(let item of bucketList){
      if(!item.isDone){
        this.channelList.push({name: item.name, messageHistory:[], userList:[]});
        this.accountSocketService.getUsersBucketItem(item.name, this.fillUserList.bind(this));
      }
    }

  }

  fillUserList(userList:string[], bucketName:string){
    for(let channel of this.channelList){
      if(channel.name==bucketName){
        channel.userList = userList;
      }
    }
  }


  receiveMesssage(message: string, username:string, bucketName: string):void 
  {
    let time = new Date;
    for(let channel of this.channelList){
      if(channel.name===bucketName)
        channel.messageHistory.push(time.toLocaleString().split(',')[1] + " | " + username + " : " + message);
    }
  }

  updateTab(index:number):void {
    this.tabSelected = index;
  }

  sendMessage():void {
    this.chatService.sendMessage(this.message, this.channelList[this.tabSelected].name, this.pushMessageToBoard.bind(this));
  }

  pushMessageToBoard():void
  {
    let time = new Date;
    this.channelList[this.tabSelected].messageHistory.push(time.toLocaleString().split(',')[1] + " | You : " + this.message);
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
