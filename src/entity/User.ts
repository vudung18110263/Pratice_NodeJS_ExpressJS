import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type: "varchar", length: 50})
    username: string;

    @Column({nullable: false, type: "varchar", length: 50})
    pwd: string;

}
