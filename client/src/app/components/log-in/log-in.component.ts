import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountSocketService } from 'src/app/services/account-socket.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  account:any = {
    username : "",
    password : ""
  }
  constructor(private router:Router,private accountservice:AccountService, private accountSocketService : AccountSocketService) { }

  ngOnInit(): void {

  }

  createAccount(){
    this.accountservice.account.username = this.account.username
    this.accountservice.account.password = this.account.password
    this.accountSocketService.connect(this.account.username, this.connectCallback.bind(this));
  }

  connectCallback(success: boolean){
    if(success){
      this.router.navigate(['profile'])
    }else{
      this.router.navigate(['objectives-to-add'])
    }
  }

  checkEmpty(){
    if (this.account.username == "" || this.account.password == ""){
      return true
    }else{
      return false
    }
  }
}
