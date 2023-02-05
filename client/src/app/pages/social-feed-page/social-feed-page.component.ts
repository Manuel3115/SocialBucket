import { Component, OnInit } from '@angular/core';
import { UserInformations } from 'src/app/interface/user_informations';
import { AccountSocketService } from 'src/app/services/account-socket.service';

@Component({
  selector: 'app-social-feed-page',
  templateUrl: './social-feed-page.component.html',
  styleUrls: ['./social-feed-page.component.css']
})
export class SocialFeedPageComponent implements OnInit {
  usersInformations! : UserInformations[];

  constructor(private accountSocketService : AccountSocketService) {}

  ngOnInit(): void {
    this.accountSocketService.register('hi', ['haha'], () => {});
    this.accountSocketService.getUsersWithSameObjective(this.setUsersInformations);
  }

  setUsersInformations(usersInfos : UserInformations[])
  {
    this.usersInformations = usersInfos;
  }

}
