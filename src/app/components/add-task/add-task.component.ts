import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Tasks } from 'src/app/tasks';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTask implements OnInit {

  taskName: string = ''
  constructor(private taskService: TaskService) { }

  fetchTask(id: number){
    this.taskService.fetchTask(id)
    .then((data)=>{
      console.log(data);
      this.taskName = data.task
    })
  }

  /*addTask(pid: number,task: Text,pri: number,sdate: Date,edate: Date){
    this.taskService.addTask(pid,task,pri,sdate,edate)
    .then((data)=>{
      console.log(data);
      this.taskName = data.task
    })
  }


  ngOnInit() {
  }*/

  tasks : Tasks=new Tasks();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  taskssaveform=new FormGroup({  
    pid:new FormControl(),  
    taskname:new FormControl(),  
    pri:new FormControl(),  
    sdate:new FormControl(),
    edate:new FormControl()
  });  
  
  saveTasks(saveTasks){  
    this.tasks=new Tasks();     
    this.tasks.parentId=this.ParentId.value;  
    this.tasks.task=this.TaskName.value;  
    this.tasks.priority=this.Priority.value; 
    this.tasks.startDate=this.StartDate.value; 
    this.tasks.endDate=this.EndDate.value;  

    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.taskService.addTask(this.tasks)  
      .then(data => console.log(data), error => console.log(error));  
    this.tasks = new Tasks();  
  }  
  
  get ParentId(){  
    return this.taskssaveform.get('pid');  
  }  
  
  get TaskName(){  
    return this.taskssaveform.get('taskname');  
  }  
  
  get Priority(){  
    return this.taskssaveform.get('pri');  
  }
  
  get StartDate(){  
    return this.taskssaveform.get('sdate');  
  }

  get EndDate(){  
    return this.taskssaveform.get('edate');  
  }
  
  addTasksForm(){  
    this.submitted=false;  
    this.taskssaveform.reset();  
  }  
}  

