import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewAccountService } from 'src/app/services/new-account.service';

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
  constructor(private router:Router,private accountservice:NewAccountService) { }

  ngOnInit(): void {

  }

  createAccount(){
    this.accountservice.account.username = this.account.username
    this.accountservice.account.password = this.account.password
    this.router.navigate(['objectives-to-add'])
  }

}
