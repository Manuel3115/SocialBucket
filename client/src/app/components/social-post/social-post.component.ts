import { Component, OnInit, Input } from '@angular/core';
import { UserInformations } from 'src/app/interface/user_informations';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css']
})
export class SocialPostComponent implements OnInit {
  @Input() userinformation!: UserInformations;

  ngOnInit(): void {

  }

}
