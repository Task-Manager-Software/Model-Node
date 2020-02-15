import { EntityBase } from "./EntityBase";
import { Account } from "./Account";

export interface AuditableEntityBase extends EntityBase {
    createdOnUTC: Date;
    
    createdById: number;
    createdBy: Account;
    
    modifiedFlag?: boolean;
    lastModifiedOnUTC?: Date;
    
    lastModifiedById?: number;
    lastModifiedBy?: Account;
    
    archivedFlag?: boolean;
    archivedOnUTC?: Date;
    
    archivedById?: number;
    archivedBy?: Account;
    
    deletedFlag?: boolean;
    deletedOnUTC?: Date;
    
    deletedById?: number;
    deletedBy?: Account;
    
    inactiveFlag?: boolean;
    inactiveOnUTC?: Date;
    
    inactiveById?: number;
    inactiveBy?: Account;
}