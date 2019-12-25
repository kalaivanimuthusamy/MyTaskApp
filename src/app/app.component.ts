import { Component, OnInit } from '@angular/core';
import {Todo} from './todo'
import { TodoService } from './services/todo.service';
import { LogService } from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [LogService]
})
export class AppComponent implements OnInit {
  ngOnInit(){

  }
}
