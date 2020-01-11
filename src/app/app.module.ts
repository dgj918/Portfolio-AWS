import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authentication/auth/auth.component';

import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { KanbanBoardComponent } from './bug-tracker/kanban-board/kanban-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    KanbanBoardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
