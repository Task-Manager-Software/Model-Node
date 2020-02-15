import { EntityBase } from "./EntityBase";
import { AccountProject } from "./AccountProject";
import { Task } from "./Task";

export interface Project extends EntityBase{
    title: string;
    showCompletedTasks: boolean;
    
    accountProjects?: AccountProject[];
    tasks?: Task[];
}