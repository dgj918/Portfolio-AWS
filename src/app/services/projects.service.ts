import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserInfoService } from '../authentication/services/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  apiUrl: string 
  userID: string

  constructor(
    protected http: HttpClient,
    private userInfoServ: UserInfoService
  ) { 
    this.apiUrl = environment.apiGateway + '/projects'
    this.userInfoServ.username.subscribe((userID) =>{
      this.userID = userID
    })
  }

  getprojects(projectName?: string): Observable<Object> {
    if (projectName){
      let getParams = new HttpParams()
      .set('entityID', projectName)
      .set('userID', this.userID)
      return this.http.get(this.apiUrl, {params: getParams})
    }
    else {
      let projParams = new HttpParams().set('userID', this.userID)
      return this.http.get(this.apiUrl, {params: projParams})
    }
    
  }
}

export class Project {
  userID: string;
  entityID: string;
  StatusHeir: string;
  Date_Started: string;
  Estimate: number;
  Time_Logged: number;
  Title: string
}
