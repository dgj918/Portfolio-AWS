import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify'
import { UserInfoService } from '../authentication/services/user-info.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    userID: any;
    sessionToken: any;
    accessID: any;

    constructor(private userInfoService: UserInfoService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        return next.handle(request);
    }
}