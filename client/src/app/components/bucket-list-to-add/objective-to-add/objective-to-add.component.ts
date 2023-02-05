import { Component, EventEmitter ,OnInit,Input,Output } from '@angular/core';
import { ObjectivesToAddService } from 'src/app/services/objectives-to-add.service';

@Component({
  selector: 'app-objective-to-add',
  templateUrl: './objective-to-add.component.html',
  styleUrls: ['./objective-to-add.component.css']
})
export class ObjectiveToAddComponent implements OnInit {
  @Input() name?:string;
  @Input() description?:string ;
  isSucceeded:boolean = false
  isAdded:boolean = false;
  objective = {
    name : this.name,
    description: this.description
  }

  constructor(private objectiveToAddService:ObjectivesToAddService) {
   }

  ngOnInit(): void {
    this.objective.name = this.name
    this.objective.description = this.description
  }

  addObjective(){
    if (this.isAdded === false){
      this.objectiveToAddService.newObjectiveSubject.next(this.objective);
    }
    else{
      this.objectiveToAddService.deleteObjectiveSubject.next(this.objective)
    }
    this.isAdded = !this.isAdded
  }
}
