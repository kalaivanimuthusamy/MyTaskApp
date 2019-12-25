import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/task';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Tasks } from 'src/app/tasks';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTask implements OnInit {

  tasksList: Array<Task> = []

  taskName: string = ''

  tasks : Tasks=new Tasks();  
  deleteMessage=false;  
  taskslist:Array<Task> = [];  
  isupdated = true; 
  isupdatedmsg = true; 
  constructor(private taskService: TaskService) { }

  fetchTask(id: number){
    this.taskService.fetchTask(id)
    .then((data)=>{
      console.log(data);
      this.taskName = data.task
    })
  }

  deleteTasks(id: number) {  
    this.taskService.removeTask(id)  
      .then(  
        data => {  
          console.log(data);  
          this.deleteMessage=true;  
          this.taskService.fetchTasks().then(data =>{  
            data => this.extractData(data)  
            })  
        },  
        error => console.log(error));  
  }  

  updateTasks(id: number){  
    this.taskService.fetchTask(id)  
      .then(  
        data => { 
          console.log(data)
          this.taskslist[0]=data  
          this.isupdated = false;
          this.tasksupdateform.get('task_id').setValue(data.task_id);
          this.tasksupdateform.get('pid').setValue(data.parent_id);
          this.tasksupdateform.get('taskname').setValue(data.task);
          this.tasksupdateform.get('pri').setValue(data.priority);
          this.tasksupdateform.get('sdate').setValue(data.start_date);
          this.tasksupdateform.get('edate').setValue(data.end_date);
                 
        },  
        error => console.log(error));  
  }  

  tasksupdateform=new FormGroup({  
    pid:new FormControl(),  
    taskname:new FormControl(),  
    pri:new FormControl(),  
    sdate:new FormControl(),
    edate:new FormControl(),
    task_id:new FormControl()
  });  
  
  updateTas(updtas){  
    this.tasks=new Tasks();     
    this.tasks.parentId=this.ParentId.value;  
    this.tasks.task=this.TaskName.value;  
    this.tasks.priority=this.Priority.value; 
    this.tasks.startDate=this.StartDate.value; 
    this.tasks.endDate=this.EndDate.value;  
    this.tasks.taskId=this.TaskId.value; 
 
    this.taskService.updateTask(this.tasks).then(  
      data => {       
        this.isupdatedmsg=false;  
        this.taskService.fetchTasks().then(data =>{  
          this.tasksList =data  
          })  
      },  
      error => console.log(error));
  }  
    
  get ParentId(){  
    return this.tasksupdateform.get('pid');  
  } 
  
  get TaskId(){  
    return this.tasksupdateform.get('task_id');  
  }  
  
  get TaskName(){  
    return this.tasksupdateform.get('taskname');  
  }  
  
  get Priority(){  
    return this.tasksupdateform.get('pri');  
  }
  
  get StartDate(){  
    return this.tasksupdateform.get('sdate');  
  }

  get EndDate(){  
    return this.tasksupdateform.get('edate');  
  }
  
  changeisUpdate(){  
    this.isupdated=true;  
  }  

  ngOnInit() {
    this.taskService.fetchTasks()
   .then(data => this.extractData(data))
  }

  extractData(data){
    console.log(data);
    this.tasksList = data
  }

}
