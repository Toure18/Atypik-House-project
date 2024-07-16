// app/src/users/user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 80, unique:true })
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @Column({ length: 255 })
    @IsNotEmpty()
    @MinLength(6)
    password:string;

    @Column({ length: 80 })
    @IsNotEmpty()
    firstname:string;

    @Column({ length: 80 })
    @IsNotEmpty()
    lastname: string;

    @Column({ length: 80 })
    @IsNotEmpty()
    accountType: string;
}