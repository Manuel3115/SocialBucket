import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {

  constructor() { }

  channelsList: string[] = ["chat"];
  messageHistory : string[] = ["message"];



  ngOnInit(): void {
    for(var i:number =0; i < 50; i++)
    this.messageHistory.push("message")
  }

}

