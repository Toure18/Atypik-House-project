// app/src/users/user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Booking } from './../../booking/entities/booking.entity';
import { Comment } from './../../comment/entities/comment.entity';
import { Property } from './../../properties/entities/property.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
export class User {

    @ApiProperty({ example: 1, description: 'The unique identifier of the User' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'email@exemple.fr', description: 'The email of the User' })
    @Column({ length: 255, unique:true })
    email:string;

    @ApiProperty({ example: 'hashedpassword', description: 'The password of the User' })
    @Column({ length: 255 })
    password:string;
    
    @ApiProperty({ example: 'John', description: 'The first name of the User' })
    @Column({ length: 255  })
    firstname:string;

    @ApiProperty({ example: 'Doe', description: 'The last name of the User' })
    @Column({ length: 255 })
    lastname: string;

    @ApiProperty({ example: 'locataire', description: 'The account type of the User' })
    @Column({ length: 255 })
    accountType: string;

    @ApiProperty({ type: () => [Property], description: 'The properties owned by the User' })
    @OneToMany(() => Property, (property) => property.user)
    properties: Property[];

    @ApiProperty({ type: () => [Booking], description: 'The bookings made by the User' })
    @OneToMany(() => Booking, (booking) => booking.user)
    booking: Booking[];

    @ApiProperty({ type: () => [Comment], description: 'The comments made by the User' })
    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];
}