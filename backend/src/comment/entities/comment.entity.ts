import { ApiProperty } from "@nestjs/swagger";
import { Property } from "./../../properties/entities/property.entity";
import { User } from "./../../users/user.entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comment')
export class Comment {

  @ApiProperty({ example: 1, description: 'The unique identifier of the comment' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'This is a comment text.', description: 'The content of the comment' })
  @Column({ type: 'text' })
  text: string;

  @ApiProperty({ example: '2024-07-17', description: 'The date when the comment was made' })
  @Column({ type: 'date' })
  date: Date;

  @ApiProperty({ type: () => User, description: 'The user who made the comment' })
  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ApiProperty({ type: () => Property, description: 'The property the comment is about' })
  @ManyToOne(() => Property, (property) => property.comments)
  property: Property;

}