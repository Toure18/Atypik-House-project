import { ApiProperty } from "@nestjs/swagger";
import { Payment } from "./../../payment/entities/payment.entity";
import { Property } from "./../../properties/entities/property.entity";
import { User } from "./../../users/user.entity/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('booking')
export class Booking {

  @ApiProperty({ example: 1, description: 'The unique identifier of the booking' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '2024-07-17', description: 'The start date of the booking' })
  @Column({ type: 'date' })
  beginDate: Date;

  @ApiProperty({ example: '2024-07-20', description: 'The end date of the booking' })
  @Column({ type: 'date' })
  endDate: Date;

  @ApiProperty({ type: () => User, description: 'The user who made the booking' })
  @ManyToOne(() => User, (user) => user.booking)
  user: User;

  @ApiProperty({ type: () => Property, description: 'The property being booked' })
  @ManyToOne(() => Property, (property) => property.booking)
  property: Property;

  @ApiProperty({ type: () => [Payment], description: 'The payments associated with the booking' })
  @OneToMany(() => Payment, (payment) => payment.booking)
  payments: Payment[];


}

