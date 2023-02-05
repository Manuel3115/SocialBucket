import { Component, OnInit, Input } from '@angular/core';
import { AccountSocketService } from 'src/app/services/account-socket.service';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  @Input() objectiveName : string = '';
  @Input() objectiveDesc : string = '';
  @Input() isSucceeded:boolean = false
  constructor(private accountSocketService : AccountSocketService) { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.isSucceeded = !this.isSucceeded;
    this.accountSocketService.changeBucketItemCheckedStatus({name : this.objectiveName, isDone : this.isSucceeded})
  }

}
