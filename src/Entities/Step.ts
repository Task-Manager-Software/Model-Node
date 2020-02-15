import { EntityBase } from "./EntityBase";
import { Task } from "./Task";

export interface Step extends EntityBase{
    taskId: number;
    task: Task;
    
    title: string;
}