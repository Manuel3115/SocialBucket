import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {
  objectives:any= [1,2,3,4,6,7,8]
  constructor() { }


  ngOnInit(): void {
  }

}
