import { AuditableEntityBase } from "./AuditableEntityBase";
import { Task } from "./Task";

export interface Attachment extends AuditableEntityBase {
    taskId: number;
    task: Task;
    
    fileName: string;
}