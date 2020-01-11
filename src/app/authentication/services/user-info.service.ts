import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private $userName: BehaviorSubject<string>
  public username: Observable<string>
  public user: any;

  constructor() { 
    this.$userName = new BehaviorSubject<string>('')
    this.username = this.$userName.asObservable()
  }

  logInUser(user: any) {
    console.log(user)
    this.$userName.next(user)
  }
}
