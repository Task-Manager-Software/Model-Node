import { IEntityBase } from "./IEntityBase";
import { IAccountProject } from "./IAccountProject";
import { ITask } from "./ITask";

export interface IProject extends IEntityBase{
    title: string;
    showCompletedTasks: boolean;
    
    accountProjects?: IAccountProject[];
    tasks?: ITask[];
}