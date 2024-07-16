// app/src/users/user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './../../booking/entities/booking.entity';
import { Comment } from './../../comment/entities/comment.entity';
import { Property } from './../../properties/entities/property.entity';

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, unique:true })
    email:string;

    @Column({ length: 255 })
    password:string;

    @Column({ length: 255  })
    firstname:string;

    @Column({ length: 255 })
    lastname: string;

    @Column({ length: 255 })
    accountType: string;

    @OneToMany(() => Property, (property) => property.user)
    properties: Property[];

    @OneToMany(() => Booking, (booking) => booking.user)
    booking: Booking[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
}