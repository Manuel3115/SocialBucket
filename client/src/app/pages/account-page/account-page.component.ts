import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BucketItem } from 'src/app/interface/bucket_item';
import { AccountSocketService } from 'src/app/services/account-socket.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  public bucketL : BucketItem[] = [];
  constructor(private accountService: AccountService, private router: Router, private accountSocketService : AccountSocketService) {}

  ngOnInit(): void {
    if(!this.accountService.account.username) this.router.navigate(['log-in']);
    this.accountSocketService.getBucketList(this.setBucketList.bind(this));
  }

  setBucketList(bucketList : BucketItem[])
  {
    this.bucketL = bucketList;
    console.log(this.bucketL);
  }
}
