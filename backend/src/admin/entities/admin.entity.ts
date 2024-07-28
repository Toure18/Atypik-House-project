import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')
export class Admin {

    @ApiProperty({ example: 1, description: 'The unique identifier of the User admin' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'email@exemple.fr', description: 'The email of the User admin' })
    @Column({ length: 255, unique:true })
    email:string;

    @ApiProperty({ example: 'email@exemple.fr', description: 'The email of the User admin' })
    @Column({ length: 255 })
    password:string;

    @ApiProperty({ example: 'John', description: 'The first name of the User admin' })
    @Column({ length: 255  })
    firstname:string;

    @ApiProperty({ example: 'Doe', description: 'The last name of the User admin' })
    @Column({ length: 255 })
    lastname: string;
}