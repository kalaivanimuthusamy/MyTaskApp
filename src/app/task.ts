export class Task {
    constructor(public task: string,public priority:number,public task_id:number,public parent_id:number,public start_date:Date,public end_date:Date){
        
    }
}