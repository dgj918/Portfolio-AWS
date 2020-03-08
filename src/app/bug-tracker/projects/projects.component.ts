import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList: any[]

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getprojects().subscribe((data) =>{
      console.log(data)
      let projectData: any = data
      this.projectList = projectData
    })
  }

}
