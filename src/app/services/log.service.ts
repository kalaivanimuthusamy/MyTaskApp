import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    logs: Array<string> = []
    
    constructor() { }

    pushLog(message: string){
        this.logs.push(message);
    }

    fetchLog(){
        return this.logs;
    }

}