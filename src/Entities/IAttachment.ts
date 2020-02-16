import { IAuditableEntityBase } from "./IAuditableEntityBase";
import { ITask } from "./ITask";

export interface IAttachment extends IAuditableEntityBase {
    taskId: number;
    task: ITask;
    
    fileName: string;
}