import { ApiProperty } from '@nestjs/swagger';
import { Booking } from './../../booking/entities/booking.entity';
import { Comment } from './../../comment/entities/comment.entity';
import { Equipment } from './../../equipment/entities/equipment.entity';
import { User } from './../../users/user.entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';


@Entity('properties')
export class Property {
  @ApiProperty({ example: 1, description: 'The unique identifier of the property' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Cozy Apartment', description: 'The name of the property' })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ example: 'Apartment', description: 'The type of the property' })
  @Column({ type: 'varchar', length: 255 })
  type: string;

  @ApiProperty({ example: 3, description: 'The number of pieces in the property' })
  @Column({ type: 'int' })
  piecesNb: number;

  @ApiProperty({ example: 4, description: 'The capacity of the property' })
  @Column({ type: 'int' })
  capacity: number;

  @ApiProperty({ example: 150.0, description: 'The price of the property' })
  @Column({ type: 'float' })
  price: number;

  @ApiProperty({ example: ['image1.jpg', 'image2.jpg'], description: 'The list of pictures of the property' })
  @Column('simple-array')
  pictures: string[];

  @ApiProperty({ example: '2024-07-01', description: 'The beginning date of availability for the property' })
  @Column({ type: 'date' })
  availability_begin: Date;

  @ApiProperty({ example: '2024-07-31', description: 'The end date of availability for the property' })
  @Column({ type: 'date' })
  availability_end: Date;

  @ApiProperty({ type: () => User, description: 'The user who owns the property' })
  @ManyToOne(() => User, (user) => user.properties)
  user: User;

  @ApiProperty({ type: () => [Comment], description: 'The list of comments for the property' })
  @OneToMany(() => Comment, (comment) => comment.property)
  comments: Comment[];

  @ApiProperty({ type: () => [Equipment], description: 'The list of equipments for the property' })
  @OneToMany(() => Equipment, (equipment) => equipment.property)
  equipments: Equipment[];

  @ApiProperty({ type: () => [Booking], description: 'The list of bookings for the property' })
  @OneToMany(() => Booking, (booking) => booking.property)
  booking: Booking[];
}

