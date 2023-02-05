import { Component, OnInit } from '@angular/core';
import { objectives } from 'src/assets/objectives'; 
@Component({
  selector: 'app-bucket-list-to-add',
  templateUrl: './bucket-list-to-add.component.html',
  styleUrls: ['./bucket-list-to-add.component.css']
})
export class BucketListToAddComponent implements OnInit {
  objectives:any= objectives
  constructor() { }

  ngOnInit(): void {

  }



}
