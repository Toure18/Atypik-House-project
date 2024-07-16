import { Payment } from "./../../payment/entities/payment.entity";
import { Property } from "./../../properties/entities/property.entity";
import { User } from "./../../users/user.entity/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('booking')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  beginDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @ManyToOne(() => User, (user) => user.booking)
  user: User;

  @ManyToOne(() => Property, (property) => property.booking)
  property: Property;

  @OneToMany(() => Payment, (payment) => payment.booking)
  payments: Payment[];


}

