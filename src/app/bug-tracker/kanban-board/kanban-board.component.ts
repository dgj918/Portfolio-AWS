import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ProjectsService } from 'src/app/services/projects.service';
import { filter, pluck } from 'rxjs/operators';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  projectsList: any[]

  todo = [
    'Create API Yaml',
    'Deploy API',
    'Create Lambda Yaml',
    'Deploy Lamabdas'
  ];

  doing = [
    ''
  ];

  done = [
    ''
  ];

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getprojects().subscribe((data) =>{
      console.log(data)
      let projectData: any = data
      this.todo = projectData
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
