import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')
export class Admin {
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
}
