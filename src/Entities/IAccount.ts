import { IEntityBase } from "./IEntityBase";
import { IAccountProject } from "./IAccountProject";
import { IAccountTask } from "./IAccountTask";

export interface IAccount extends IEntityBase {
  fullName: string;
  accountProjects?: IAccountProject[];
  accountTasks?: IAccountTask[];
}
