import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  isSucceeded:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.isSucceeded = !this.isSucceeded
  }

}
