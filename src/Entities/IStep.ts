import { IEntityBase } from "./IEntityBase";
import { ITask } from "./ITask";

export interface IStep extends IEntityBase{
    taskId: number;
    task: ITask;
    
    title: string;
}