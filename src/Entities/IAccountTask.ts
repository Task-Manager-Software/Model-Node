import { IEntityBase } from "./IEntityBase";
import { IAccount } from "./IAccount";
import { ITask } from "./ITask";

export interface IAccountTask extends IEntityBase {
  accountId: number;
  account: IAccount;

  taskId: number;
  task: ITask;

  isAccepted: boolean;
}
