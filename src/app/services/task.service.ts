import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {
    baseUrl: string = "http://localhost:8080/"
    
    constructor(private http: Http) { }

    fetchTask(id:number): Promise<any>{
        return this.http.get(this.baseUrl + 'SpringHibernateCapRest/task/'+ id)
        .toPromise().then(res=>res.json())
    }

    fetchTasks(): Promise<any>{
        return this.http.get(this.baseUrl + 'SpringHibernateCapRest/tasks')
        .toPromise().then(res=>res.json())
    }

    addTask(tasks: object): Promise<any>{
        return this.http.post(this.baseUrl + 'SpringHibernateCapRest/addtask/',tasks)
        .toPromise().then(res=>res.json())
    }

    updateTask(tasks: object): Promise<any>{
        return this.http.put(this.baseUrl + 'SpringHibernateCapRest/updatetask/',tasks)
        .toPromise().then(res=>res.json())
    } 
    
    removeTask(index: number): Promise<any>{
        return this.http.delete(this.baseUrl + 'SpringHibernateCapRest/deltask/' + index)
        .toPromise().then(res=>res.json())
      }
  
}