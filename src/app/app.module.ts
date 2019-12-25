import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilterTodoPipe } from './pipes/filtertodos.pipe';
import { FilterTaskPipe } from './pipes/filtertasks.pipe';
import { TodoService } from './services/todo.service';
import { TaskService } from './services/task.service';
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AddComponent } from './components/view/add.component';
import { ViewComponent } from './components/view/view.component';
import { LogService } from './services/log.service';
import { ViewTask } from './components/view-task/view-task.component';
import { AddTask } from './components/add-task/add-task.component';
import {DataTablesModule} from 'angular-datatables';

const routes = [
  {path:"", component:ViewComponent},
  {path:"add", component:AddComponent},
  {path:"task", component:ViewTask},
  {path:"addTask", component:AddTask},

]

@NgModule({
  declarations: [
    AppComponent, FilterTodoPipe,FilterTaskPipe, AddComponent, ViewComponent, ViewTask, AddTask

  ],
  imports: [
    BrowserModule, HttpModule , RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule,DataTablesModule
  ],
  providers: [TodoService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
