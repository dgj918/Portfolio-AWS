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



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    userID: string;
    userAccessToken: string;

    constructor() {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        Auth.currentAuthenticatedUser()
        .then(user => {
            this.userID = user['username']
            this.userAccessToken = user['signInUserSession']['idToken']['jwtToken']
            request = request.clone({
                setHeaders: {
                    Authorization: this.userAccessToken
                }
            });
            return request
        })
        .catch(err => console.log(err))
        return next.handle(request);
        
        
    }
}