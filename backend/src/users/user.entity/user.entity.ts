// app/src/users/user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 80, unique:true })
    email:string;

    @Column({ length: 255 })
    password:string;

    @Column({ length: 80 })
    firstname:string;

    @Column({ length: 80 })
    lastname: string;

    @Column({ length: 80 })
    accountType: string;
}