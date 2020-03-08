import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { UserInfoService } from './services/user-info.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userInfoServ: UserInfoService) {}
  canActivate(): Promise < boolean > {
    return new Promise((resolve) => {
      Auth.currentAuthenticatedUser({
          bypassCache: false
        })
        .then((user) => {
          if(user){
            const $userCredsOb = Auth.currentUserCredentials()
            const $userNameOb = Auth.currentUserInfo()
            combineLatest([$userCredsOb, $userNameOb]).pipe(
                map(([tokenInfo, userInfo]) => ({tokenInfo, userInfo}))
            )
            .subscribe(userInfo => {
                this.userInfoServ.updateUserName(userInfo.userInfo.username)
                this.userInfoServ.updateUserToken(userInfo.tokenInfo.sessionToken)
                resolve(true);
            });
          }
        })
        .catch(() => {
          this.router.navigate(['/login']);
          resolve(false);
        });
    });
  }
}