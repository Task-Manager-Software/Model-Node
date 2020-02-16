import { IEntityBase } from "./IEntityBase";
import { IAccount } from "./IAccount";

export interface IAuditableEntityBase extends IEntityBase {
    createdOnUTC: Date;
    
    createdById: number;
    createdBy: IAccount;
    
    modifiedFlag?: boolean;
    lastModifiedOnUTC?: Date;
    
    lastModifiedById?: number;
    lastModifiedBy?: IAccount;
    
    archivedFlag?: boolean;
    archivedOnUTC?: Date;
    
    archivedById?: number;
    archivedBy?: IAccount;
    
    deletedFlag?: boolean;
    deletedOnUTC?: Date;
    
    deletedById?: number;
    deletedBy?: IAccount;
    
    inactiveFlag?: boolean;
    inactiveOnUTC?: Date;
    
    inactiveById?: number;
    inactiveBy?: IAccount;
}