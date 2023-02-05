import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewAccountService } from 'src/app/services/new-account.service';
import { ObjectivesToAddService } from 'src/app/services/objectives-to-add.service';

@Component({
  selector: 'app-objectives-to-add-page',
  templateUrl: './objectives-to-add-page.component.html',
  styleUrls: ['./objectives-to-add-page.component.css']
})
export class ObjectivesToAddPageComponent implements OnInit {
  objectivesAdded:any[] = []
  constructor(private objectiveToAddService:ObjectivesToAddService,private router:Router,private accountService:NewAccountService) { }

  ngOnInit(): void {
    this.objectiveToAddService.newObjectiveSubject.subscribe((value:any)=>{
      this.objectivesAdded.push(value)
    })
    this.objectiveToAddService.deleteObjectiveSubject.subscribe((value:any)=>{
      this.objectivesAdded.forEach((item,index)=>{
        if (value === item) this.objectivesAdded.splice(index,1);
      })
    })
  }

  addToBucketList(){
    this.accountService.account.objective = this.objectivesAdded
    this.router.navigate(['profile']);
  }



}
