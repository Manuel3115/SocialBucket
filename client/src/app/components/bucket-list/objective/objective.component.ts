import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  @Input() objectiveName : string = '';
  @Input() objectiveDesc : string = '';
  @Input() isSucceeded:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.isSucceeded = !this.isSucceeded
  }

}
