import { Booking } from "./../../booking/entities/booking.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('payment')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ length: 255 })
  status: string;

  @ManyToOne(() => Booking, (booking) => booking.payments)
  booking: Booking;

}
