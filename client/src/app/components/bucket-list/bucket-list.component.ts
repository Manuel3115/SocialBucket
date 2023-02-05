import { Component, OnInit, Input } from '@angular/core';
import { BucketItem } from 'src/app/interface/bucket_item';
import { ObjectiveService } from 'src/app/services/objective.service';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {
  @Input() bucketList: BucketItem[]= [];
  constructor(public objectiveService : ObjectiveService) { }


  ngOnInit(): void {
  }

  addedObjectives(){
    
  }

}
