import { EntityBase } from "./EntityBase";
import { AccountProject } from "./AccountProject";
import { AccountTask } from "./AccountTask";

export interface Account extends EntityBase {
  fullName: string;
  accountProjects?: AccountProject[];
  accountTasks?: AccountTask[];
}
