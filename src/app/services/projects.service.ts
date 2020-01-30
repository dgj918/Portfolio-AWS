import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  apiUrl: string 

  constructor(
    protected http: HttpClient
  ) { 
    this.apiUrl = environment.apiGateway + '/projects'
  }

  getprojects(projectName?: string): Observable<Object> {
    let getParams = new HttpParams()
    if (projectName){
      getParams.set('EntityID', projectName)
      return this.http.get(this.apiUrl, {params: getParams})
    }
    else {
      return this.http.get(this.apiUrl)
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
