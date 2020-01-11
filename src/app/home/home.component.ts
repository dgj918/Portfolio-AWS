import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../authentication/services/user-info.service';
import { AuthComponent } from '../authentication/auth/auth.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authUserInfoService: UserInfoService) { }

  ngOnInit() {
    this.authUserInfoService.username.subscribe((userNameData) => {
      console.log(userNameData)
    })
  }

}
