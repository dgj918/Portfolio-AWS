import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BugTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    DragDropModule,
    
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
