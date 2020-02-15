import { EntityBase } from "./EntityBase";
import { Project } from "./Project";

export interface AccountProject extends EntityBase {
    accountId: number;
    account: Account;

    projectId: number;
    project: Project;
    
    isOwner: boolean;
    isAccepted: boolean;
}