import { type } from "os";
import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    ManyToOne
} from "typeorm";
import {Users} from "./Users";
@Entity()
export class Tasks{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: "varchar", length:30})
    taskName: string;

    @Column({nullable: false, type: "varchar", length:30})
    taskDescription: string;

    @ManyToOne(type => Users, user=>user.tasks)
    user: Users;

    @Column({nullable: false, type: "varchar", length:50})
    expireDate: string;

    @Column({nullable: false, type: "varchar", length:10})
    taskStatus: string;

    @Column({nullable: false, type: "varchar", length:50})
    createdTime: string;

    @Column({nullable: false, type: "varchar", length:50})
    updatedTime: string;
}