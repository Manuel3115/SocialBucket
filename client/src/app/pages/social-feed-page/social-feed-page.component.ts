import { Component, OnInit } from '@angular/core';
import { UserInformations } from 'src/app/interface/user_informations';
import { AccountSocketService } from 'src/app/services/account-socket.service';
import { ObjectiveService } from 'src/app/services/objective.service';

@Component({
  selector: 'app-social-feed-page',
  templateUrl: './social-feed-page.component.html',
  styleUrls: ['./social-feed-page.component.css']
})
export class SocialFeedPageComponent implements OnInit {
  usersInformations! : UserInformations[];

  constructor(private accountSocketService : AccountSocketService, private objectiveService : ObjectiveService) {}

  ngOnInit(): void {
    this.accountSocketService.getUsersWithSameObjective(this.setUsersInformations.bind(this));
  }

  setUsersInformations(usersInfos : UserInformations[])
  {
    for (let user of usersInfos)
    {
      for (let bucketItem of user.bucketList)
      {
        bucketItem.name = this.objectiveService.getObjectiveDescription(bucketItem.name);
      }
    }
    this.usersInformations = usersInfos;
  }

}
