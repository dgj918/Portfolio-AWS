import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

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

  constructor() { 
    this.$userName = new BehaviorSubject<string>('')
    this.username = this.$userName.asObservable()

    this.$userToken = new BehaviorSubject<string>('')
    this.token = this.$userToken.asObservable()
  }

  updateUserName(user: any) { 
    this.$userName.next(user)
  }

  updateUserToken(token: any){
    this.$userToken.next(token)
  }



}
