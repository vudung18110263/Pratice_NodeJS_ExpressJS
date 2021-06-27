import { type } from "os";
import {
    Entity, 
    PrimaryGeneratedColumn,
    OneToMany, 
    Column} from "typeorm";
import {Tasks} from "./Tasks";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: "varchar", length: 50})
    username: string;

    @Column({nullable: false, type: "varchar", length: 50})
    pwd: string;

    @OneToMany(type => Tasks, task => task.user)
    tasks: Tasks[];

}
