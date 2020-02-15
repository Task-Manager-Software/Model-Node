import { EntityBase } from "./EntityBase";
import { Account } from "./Account";
import { Task } from "./Task";

export interface AccountTask extends EntityBase {
    accountId: number;
    account: Account;
    
    taskId: number;
    task: Task;
    
    isAccepted: boolean;
}