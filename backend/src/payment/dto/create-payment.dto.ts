import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Column } from "typeorm";

export class CreatePaymentDto {

  @Column({ type: 'float' })
  price: number;

  @Column({ length: 255 })
  status: string;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  booking: number;
}