import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AmplifyService } from 'aws-amplify-angular';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private $userName: BehaviorSubject<string>
  public username: Observable<string>
  public user: any;

  private $userToken: BehaviorSubject<string>
  public usertoken: Observable<string>
  public token: any;

  constructor(private amplifyService: AmplifyService) { 
    this.$userName = new BehaviorSubject<string>('')
    this.username = this.$userName.asObservable()

    this.$userToken = new BehaviorSubject<string>('')
    this.token = this.$userToken.asObservable()
  }

  logInUser(user: any) { 
    let accessToken = environment.cognitoIDServProvider + user + '.accessToken'
    this.$userName.next(user)
    this.$userToken.next(localStorage.getItem(accessToken))
  }



}
