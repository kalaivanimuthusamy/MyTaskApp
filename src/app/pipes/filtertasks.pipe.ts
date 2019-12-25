import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task';


@Pipe({
    name: 'filterTasks'
})
export class FilterTaskPipe implements PipeTransform {

    transform(tasksList: Array<Task>, args: any) {
        console.log(tasksList);
        console.log(args);
       // let searchedTasks = tasksList.filter( (task: Task) => {
       //     return task.task.includes(args) 
       // });
//console.log(searchedTasks)
        //return searchedTasks;
        return tasksList.filter(function(item){
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }


}