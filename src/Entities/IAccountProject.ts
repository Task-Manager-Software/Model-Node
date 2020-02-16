import { IEntityBase } from "./IEntityBase";
import { IProject } from "./IProject";

export interface IAccountProject extends IEntityBase {
    accountId: number;
    account: Account;

    projectId: number;
    project: IProject;
    
    isOwner: boolean;
    isAccepted: boolean;
}