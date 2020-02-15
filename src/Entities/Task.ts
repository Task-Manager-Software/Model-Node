import { AuditableEntityBase } from "./AuditableEntityBase";
import { Project } from "./Project";
import { RepeatType } from "../Enums/RepeatType";
import { AccountTask } from "./AccountTask";
import { Step } from "./Step";
import { Attachment } from "./Attachment";

export interface Task extends AuditableEntityBase {
    projectId?: number;
    project?: Project;
    
    title?: string;
    isMyDay?: boolean;
    isImportant?: boolean;
    remindDateUTC?: Date;
    dueDateUTC?: Date;
    repeatType?: RepeatType;
    selectedWeekDays?: number;
    note?: string;
    
    accountTasks?: AccountTask[];
    steps?: Step[];
    attachments?: Attachment[];
}