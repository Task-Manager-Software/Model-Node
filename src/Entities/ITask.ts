import { IAuditableEntityBase } from "./IAuditableEntityBase";
import { IProject } from "./IProject";
import { RepeatType } from "../Enums/RepeatType";
import { IAccountTask } from "./IAccountTask";
import { IStep } from "./IStep";
import { IAttachment } from "./IAttachment";

export interface ITask extends IAuditableEntityBase {
    projectId?: number;
    project?: IProject;
    
    title?: string;
    isMyDay?: boolean;
    isImportant?: boolean;
    remindDateUTC?: Date;
    dueDateUTC?: Date;
    repeatType?: RepeatType;
    selectedWeekDays?: number;
    note?: string;
    
    accountTasks?: IAccountTask[];
    steps?: IStep[];
    attachments?: IAttachment[];
}