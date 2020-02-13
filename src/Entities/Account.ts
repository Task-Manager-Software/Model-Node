import {Entity, Column} from "typeorm";
import { EntityBase } from "./EntityBase";

//@Entity()
export class Account extends EntityBase {
    //@Column()  
    FullName: string;
}
