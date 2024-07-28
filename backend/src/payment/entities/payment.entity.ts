import { ApiProperty } from "@nestjs/swagger";
import { Booking } from "./../../booking/entities/booking.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('payment')
export class Payment {

  @ApiProperty({ example: 1, description: 'The unique identifier of the payment' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 100.0, description: 'The price of the payment' })
  @Column({ type: 'float' })
  price: number;

  @ApiProperty({ example: 'completed', description: 'The status of the payment' })
  @Column({ length: 255 })
  status: string;

  @ApiProperty({ type: () => Booking, description: 'The booking to which the payment belongs' })
  @ManyToOne(() => Booking, (booking) => booking.payments)
  booking: Booking;

}