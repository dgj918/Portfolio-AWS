import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public signedIn: boolean;
  public user: any;
  public greeting: string;

  constructor(private amplifyService: AmplifyService,
    private router: Router,
    private userInfoServ: UserInfoService) { 
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!this.signedIn) {
          this.user = null
        } else {
          this.user = authState.user
          Auth.currentCredentials().then((user) => {
            this.userInfoServ.updateUserToken(user)
          })
          Auth.currentUserInfo().then((userInfo) =>{
            this.userInfoServ.updateUserName(userInfo.username)
          })
          this.router.navigate(['/home']);
        }
      });
  }

  ngOnInit() {
  }

}
