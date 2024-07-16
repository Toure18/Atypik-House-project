import { Property } from "./../../properties/entities/property.entity";
import { User } from "./../../users/user.entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  text: string;

  @Column({ type: 'date' })
  date: Date;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Property, (property) => property.comments)
  property: Property;

}
