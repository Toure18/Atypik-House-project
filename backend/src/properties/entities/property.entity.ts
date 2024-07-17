import { Booking } from './../../booking/entities/booking.entity';
import { Comment } from './../../comment/entities/comment.entity';
import { Equipment } from './../../equipment/entities/equipment.entity';
import { User } from './../../users/user.entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';


@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  type: string;

  @Column({ type: 'int' })
  piecesNb: number;

  @Column({ type: 'int' })
  capacity: number;

  @Column({ type: 'float' })
  price: number;

  @Column('simple-array')
  pictures: string[];

  @Column({ type: 'date' })
  availability: Date;

  @ManyToOne(() => User, (user) => user.properties)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.property)
  comments: Comment[];

  @OneToMany(() => Equipment, (equipment) => equipment.property)
  equipments: Equipment[];

  @OneToMany(() => Booking, (booking) => booking.property)
  booking: Booking[];
}

