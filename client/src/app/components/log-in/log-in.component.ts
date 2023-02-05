import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router,private accountservice:AccountService) { }

  ngOnInit(): void {

  }

  createAccount(){
    this.accountservice.account.username = this.account.username
    this.accountservice.account.password = this.account.password
    this.router.navigate(['objectives-to-add'])
  }

  checkEmpty(){
    if (this.account.username == "" || this.account.password == ""){
      return true
    }else{
      return false
    }
  }
}
